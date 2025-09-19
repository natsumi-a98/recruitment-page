import { useState } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import { useSwipeable } from "react-swipeable";
import { AiOutlineLeft, AiOutlineRight, AiOutlineDownload } from "react-icons/ai";
import media from "../../styles/mediaQuery";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

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

const PdfWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #fff;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.md`
    max-width: 100%;
  `}
`;

const PdfArea = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: fill; /* 16:9いっぱいに拡縮 */
  }
`;

const Controls = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #f5f5f5;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  ${media.md`
    max-width: 100%;
  `}

  button,
  a {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;
    padding: 4px;
  }

  button:hover,
  a:hover {
    color: #333;
  }

  button[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  span {
    font-size: 0.9rem;
    color: #666;
    margin-left: 8px;
  }
`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const paginate = (newDirection: 1 | -1) => {
    setPageNumber((p) => Math.min(Math.max(1, p + newDirection), numPages));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Section id="recruit-pdf">
      <PdfWrapper {...handlers}>
        <PdfArea>
          <Document
            file="/docs/recruit_pitch_20250905.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading="読み込み中..."
          >
            {/* メインページ */}
            <Page
              key={`page_${pageNumber}`}
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />

            {/* 事前読み込み（前後ページ） */}
            {pageNumber > 1 && (
              <div style={{ display: "none" }}>
                <Page pageNumber={pageNumber - 1} />
              </div>
            )}
            {pageNumber < numPages && (
              <div style={{ display: "none" }}>
                <Page pageNumber={pageNumber + 1} />
              </div>
            )}
          </Document>
        </PdfArea>
      </PdfWrapper>

      <Controls>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button onClick={() => paginate(-1)} disabled={pageNumber <= 1}>
            <AiOutlineLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={pageNumber >= numPages}
          >
            <AiOutlineRight />
          </button>
          <span>
            {pageNumber} / {numPages || "—"}
          </span>
        </div>
        <a
          href="/docs/recruit_pitch_20250905.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineDownload />
        </a>
      </Controls>
    </Section>
  );
};

export default PdfViewer;
