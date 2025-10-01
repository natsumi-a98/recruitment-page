import { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import { useSwipeable } from "react-swipeable";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDownload,
  AiOutlineExpand,
  AiOutlineShrink,
} from "react-icons/ai";
import media from "../../styles/mediaQuery";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

/* ---------- styled components ---------- */

const Section = styled.section`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.md`
    padding: 12px;
  `}
`;

const PdfWrapper = styled.div<{ isFullscreen: boolean }>`
  width: 100%;
  max-width: ${({ isFullscreen }) => (isFullscreen ? "100vw" : "900px")};
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
  height: ${({ isFullscreen }) => (isFullscreen ? "100vh" : "auto")};
  background: #fff;
  border-radius: ${({ isFullscreen }) => (isFullscreen ? "0" : "8px")};
  box-shadow: ${({ isFullscreen }) =>
    isFullscreen ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1)"};
  cursor: grab;
`;

const PdfArea = styled.div<{ height: number; isFullscreen: boolean }>`
  width: 100%;
  height: ${({ isFullscreen }) => (isFullscreen ? "100vh" : "100%")};
  position: relative;
  overflow: hidden;
  user-select: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    display: block;
    pointer-events: none;
  }
`;

const SlideTrack = styled.div<{
  animating: boolean;
  trackWidth: number;
  height: number;
}>`
  display: flex;
  height: ${(p) => p.height}px;
  width: ${(p) => p.trackWidth}px;
  transition: ${(p) => (p.animating ? "transform 0.32s ease" : "none")};
  will-change: transform;
`;

const Slide = styled.div<{ w: number; h: number }>`
  flex: 0 0 ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Controls = styled.div<{
  visible: boolean;
  value: number;
  max: number;
}>`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(${({ visible }) => (visible ? "0%" : "100%")});
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  background: rgba(105, 105, 105, 0.35);
  pointer-events: auto;

  .top-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button,
    a {
      background: none;
      border: none;
      cursor: pointer;
      color: #eee;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      padding: 4px;
      transition: color 0.2s;
    }

    button:hover,
    a:hover {
      color: #fff;
    }
    button[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }

    span {
      font-size: 0.9rem;
      color: #fff;
      margin-left: 8px;
    }
  }

  .slider-row {
    width: 100%;
    margin-top: 2px;
    position: relative;
    input[type="range"] {
      width: 100%;
      -webkit-appearance: none;
      height: 8px;
      border-radius: 5px;
      background: linear-gradient(
        to right,
        #5170ff ${(props) => (props.value / props.max) * 100}%,
        #eee ${(props) => (props.value / props.max) * 100}%
      );
      outline: none;
      cursor: pointer;
      display: block;
      touch-action: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
    input[type="range"]::-moz-range-thumb {
      width: 0;
      height: 0;
      border: none;
    }
  }
`;

/* ---------- PdfViewer component ---------- */

const PdfViewer: React.FC = () => {
  const ASPECT_RATIO = 16 / 9;

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [controlsHover, setControlsHover] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [containerWidth, setContainerWidth] = useState(900);
  const [containerHeight, setContainerHeight] = useState(900 / ASPECT_RATIO);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [previewPage, setPreviewPage] = useState<number | null>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  const pdfRef = useRef<HTMLDivElement | null>(null);
  const pdfAreaRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const pdfObjRef = useRef<pdfjs.PDFDocumentProxy | null>(null);
  const previewCache = useRef<{ [page: number]: string }>({});
  const lastNavRef = useRef<number>(0);
  const NAV_DEBOUNCE_MS = 220;
  const pointerDownRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );
  const isDraggingRef = useRef(false);

  /* ---------- Resize ---------- */
  useEffect(() => {
    if (!pdfRef.current) return;
    const setWidth = () => {
      const w = pdfRef.current!.clientWidth;
      setContainerWidth(w);
      setContainerHeight(isFullscreen ? window.innerHeight : w / ASPECT_RATIO);
    };
    setWidth();
    const ro = new ResizeObserver(setWidth);
    ro.observe(pdfRef.current);
    window.addEventListener("resize", setWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setWidth);
    };
  }, [isFullscreen]);

  /* ---------- PDFロード ---------- */
  useEffect(() => {
    let canceled = false;
    pdfjs
      .getDocument("/docs/recruit_pitch_20250905.pdf")
      .promise.then((pdf) => {
        if (canceled) return;
        pdfObjRef.current = pdf;
        if (pdf.numPages && numPages === 0) setNumPages(pdf.numPages);
      });
    return () => {
      canceled = true;
    };
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setPageNumber(1);
      for (let i = 1; i <= Math.min(3, numPages); i++) cachePage(i, 0.15);
    },
    []
  );

  const cachePage = (
    pageNum: number,
    scale = 0.2,
    force = false
  ): void => {
    if (!pdfObjRef.current) return;
    if (previewCache.current[pageNum] && !force) return;
    pdfObjRef.current
      .getPage(pageNum)
      .then((page) => {
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        page
          .render({ canvasContext: ctx, viewport })
          .promise.then(() => {
            try {
              previewCache.current[pageNum] = canvas.toDataURL();
            } catch {}
          })
          .catch(() => {});
      });
  };

  useEffect(() => {
    if (!pdfObjRef.current || numPages === 0) return;
    const range = isFullscreen ? 3 : 1;
    for (
      let i = Math.max(1, pageNumber - range);
      i <= Math.min(numPages, pageNumber + range);
      i++
    )
      cachePage(i, isFullscreen ? 0.9 : 0.4);
  }, [isFullscreen, pageNumber, numPages]);

  const updatePreviewByClientX = (clientX: number) => {
    if (!sliderRef.current || numPages === 0) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / rect.width)
    );
    const hoverPageNum = Math.ceil(ratio * numPages) || 1;
    setPreviewPage(hoverPageNum);
    setHoverX(clientX - rect.left);
    [hoverPageNum - 1, hoverPageNum, hoverPageNum + 1].forEach((p) => {
      if (p >= 1 && p <= numPages) cachePage(p, 0.18);
    });
  };

  const safeNavigate = (targetPage: number) => {
    const now = Date.now();
    if (now - lastNavRef.current < NAV_DEBOUNCE_MS) return false;
    lastNavRef.current = now;
    const next = Math.min(Math.max(1, targetPage), numPages || 1);
    if (next === pageNumber) return false;
    setPageNumber(next);
    return true;
  };

  const handleSlide = (direction: 1 | -1) => {
    if (animating) return;
    const candidate = pageNumber + direction;
    if (candidate < 1 || candidate > numPages) return;
    setAnimating(true);
    isDraggingRef.current = true;
    setDragX(direction * -containerWidth);
    window.setTimeout(() => {
      setPageNumber((p) =>
        Math.min(Math.max(1, p + direction), numPages)
      );
      setDragX(0);
      window.setTimeout(() => {
        setAnimating(false);
        isDraggingRef.current = false;
      }, 20);
    }, 320);
  };

  const nextPage = () => handleSlide(1);
  const prevPage = () => handleSlide(-1);

  const handlers = useSwipeable({
    onSwiping: (e) => {
      isDraggingRef.current = true;
      setAnimating(false);
      setDragX(e.deltaX);
    },
    onSwiped: (e) => {
      isDraggingRef.current = false;
      const threshold = Math.max(40, containerWidth * 0.08);
      if (
        e.dir === "Left" &&
        pageNumber < numPages &&
        e.absX > threshold
      )
        handleSlide(1);
      else if (
        e.dir === "Right" &&
        pageNumber > 1 &&
        e.absX > threshold
      )
        handleSlide(-1);
      else {
        setAnimating(true);
        setDragX(0);
        window.setTimeout(() => setAnimating(false), 320);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
  });

  const toggleFullscreen = () => {
    if (!pdfRef.current) return;
    if (!document.fullscreenElement) pdfRef.current.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  useEffect(() => {
    const handler = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () =>
      document.removeEventListener("fullscreenchange", handler);
  }, []);

  /* ---------- PDFクリックで左右ページ切替 ---------- */
  useEffect(() => {
    const el = pdfAreaRef.current;
    if (!el) return;
    const onPointerDown = (ev: PointerEvent) => {
      pointerDownRef.current = {
        x: ev.clientX,
        y: ev.clientY,
        time: Date.now(),
      };
      (ev.target as Element).setPointerCapture?.(
        (ev as any).pointerId
      );
    };
    const onPointerUp = (ev: PointerEvent) => {
      const down = pointerDownRef.current;
      pointerDownRef.current = null;
      try {
        (ev.target as Element).releasePointerCapture?.(
          (ev as any).pointerId
        );
      } catch {}
      if (!down || isDraggingRef.current || animating) return;
      const dx = ev.clientX - down.x;
      const dy = ev.clientY - down.y;
      const dt = Date.now() - down.time;
      if (Math.hypot(dx, dy) < 10 && dt < 400) {
        const rect = el.getBoundingClientRect();
        const relX = ev.clientX - rect.left;
        if (relX < rect.width / 2) prevPage();
        else nextPage();
      }
    };
    const onPointerMove = (ev: PointerEvent) => {
      if (!pointerDownRef.current) return;
      const dx = ev.clientX - pointerDownRef.current.x;
      const dy = ev.clientY - pointerDownRef.current.y;
      if (Math.hypot(dx, dy) > 8) isDraggingRef.current = true;
    };
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointercancel", () => {
      pointerDownRef.current = null;
      isDraggingRef.current = false;
    });
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointermove", onPointerMove);
    };
  }, [animating, pageNumber, numPages]);

  const isMobile = containerWidth <= 600;
  const controlsAlwaysOn = isMobile;
  const controlsVisible = controlsAlwaysOn || controlsHover || (isMobile && isFullscreen);

  const baseline = -1 * (pageNumber - 1) * containerWidth;
  const trackTransform = `translateX(${baseline + dragX}px)`;
  const trackWidth = numPages * containerWidth;

  const renderSlideContent = (p: number) => {
    const shouldRenderPdf =
      p === pageNumber || p === pageNumber - 1 || p === pageNumber + 1;
    if (shouldRenderPdf) {
      return (
        <Page
          pageNumber={p}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={containerWidth}
          loading={<div style={{ width: "100%", height: "100%" }} />}
        />
      );
    }
    const thumb = previewCache.current[p];
    if (thumb)
      return (
        <img
          src={thumb}
          alt={`preview ${p}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      );
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f5f5f5",
        }}
      />
    );
  };

  return (
    <Section id="recruit-pdf">
      <PdfWrapper
        {...handlers}
        ref={pdfRef}
        isFullscreen={isFullscreen}
        style={{
          cursor: isDraggingRef.current ? "grabbing" : "grab",
        }}
        onMouseEnter={() => setControlsHover(true)}
        onMouseLeave={() => setControlsHover(false)}
      >
        <PdfArea height={containerHeight} ref={pdfAreaRef} isFullscreen={isFullscreen}>
          <Document
            file="/docs/recruit_pitch_20250905.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <SlideTrack
              animating={animating}
              trackWidth={trackWidth}
              height={containerHeight}
              style={{ transform: trackTransform }}
            >
              {Array.from({ length: numPages }, (_, i) => i + 1).map(
                (p) => (
                  <Slide key={p} w={containerWidth} h={containerHeight}>
                    {renderSlideContent(p)}
                  </Slide>
                )
              )}
            </SlideTrack>
          </Document>
        </PdfArea>

        <Controls visible={controlsVisible} value={pageNumber} max={numPages}>
          <div className="top-row">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button onClick={prevPage} disabled={pageNumber <= 1}>
                <AiOutlineLeft />
              </button>
              <button onClick={nextPage} disabled={pageNumber >= numPages}>
                <AiOutlineRight />
              </button>
              <span>
                {pageNumber} / {numPages || "—"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a
                href="/docs/recruit_pitch_20250905.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineDownload />
              </a>
              <button onClick={toggleFullscreen}>
                {isFullscreen ? <AiOutlineShrink /> : <AiOutlineExpand />}
              </button>
            </div>
          </div>

          <div className="slider-row">
            <input
              ref={sliderRef}
              type="range"
              min={1}
              max={numPages || 1}
              value={pageNumber}
              onChange={(e) => safeNavigate(Number(e.target.value))}
              onMouseMove={(e) => {
                setIsHoveringSlider(true);
                updatePreviewByClientX(e.clientX);
              }}
              onMouseLeave={() => {
                setIsHoveringSlider(false);
                setPreviewPage(null);
              }}
              onTouchStart={(e) => {
                setIsHoveringSlider(true);
                updatePreviewByClientX(e.touches[0].clientX);
              }}
              onTouchMove={(e) => {
                setIsHoveringSlider(true);
                updatePreviewByClientX(e.touches[0].clientX);
              }}
              onTouchEnd={() => {
                setIsHoveringSlider(false);
                setPreviewPage(null);
              }}
            />
            {isHoveringSlider &&
              previewPage &&
              hoverX !== null &&
              previewCache.current[previewPage] && (
                <img
                  src={previewCache.current[previewPage]}
                  alt={`Preview ${previewPage}`}
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    left: `${hoverX}px`,
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "67.5px",
                    border: "1px solid #ccc",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    background: "#fff",
                    zIndex: 10,
                    pointerEvents: "none",
                  }}
                />
              )}
          </div>
        </Controls>
      </PdfWrapper>
    </Section>
  );
};

export default PdfViewer;
