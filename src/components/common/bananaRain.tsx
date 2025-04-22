import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bananaImage from "../../../public/images/banana.png";

const fallDesktop = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(350vh) rotate(360deg);
    opacity: 0;
  }
`;

const fallMobile = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(220vh) rotate(360deg);
    opacity: 0;
  }
`;

const Banana = styled.img<{
  $left: number;
  $duration: number;
  $size: number;
  $isMobile: boolean;
}>`
  position: absolute;
  top: -100px;
  left: ${({ $left }) => $left}%;
  width: ${({ $size }) => $size}px;
  animation: ${({ $isMobile }) => ($isMobile ? fallMobile : fallDesktop)}
    ${({ $duration }) => $duration}s linear forwards;
  pointer-events: none;
  z-index: 999;
`;


interface BananaProps {
  id: number;
  left: number;
  duration: number;
  size: number;
}

export const BananaRain: React.FC = () => {
  const [bananas, setBananas] = useState<BananaProps[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(
      () => {
        const newBanana: BananaProps = {
          id: Date.now(),
          left: Math.random() * 100,
          duration: isMobile ? 6 + Math.random() * 1.5 : 7 + Math.random() * 2,
          size: isMobile ? 20 + Math.random() * 20 : 30 + Math.random() * 30,
        };
        setBananas((prev) => [...prev, newBanana]);

        setTimeout(() => {
          setBananas((prev) => prev.filter((b) => b.id !== newBanana.id));
        }, newBanana.duration * 1000);
      },
      isMobile ? 500 : 300
    );

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {bananas.map((banana) => (
        <Banana
          key={banana.id}
          src={bananaImage}
          $left={banana.left}
          $duration={banana.duration}
          $size={banana.size}
          $isMobile={isMobile}
        />
      ))}
    </>
  );
};
