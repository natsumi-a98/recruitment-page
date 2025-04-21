import { useEffect, useRef } from "react";
import styled from "styled-components";
import cursorImage from "/public/images/カーソルロボ.png";
import media from "../../styles/mediaQuery";

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background-image: url(${cursorImage});
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%) rotateY(0deg);
  transform-style: preserve-3d;
  will-change: transform;

  ${media.mobile`
    display: none;
  `}
`;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const cursor = cursorRef.current;
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      if (cursorRef.current) {
        angleRef.current += 10;
        cursorRef.current.style.transform = `translate(-50%, -50%) rotateY(${angleRef.current}deg)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <Cursor ref={cursorRef} />;
};

export default CustomCursor;
