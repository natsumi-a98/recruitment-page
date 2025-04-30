import React from "react";
import styled, { keyframes } from "styled-components";

const IndicatorAnimation = keyframes`
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
`;

const ScrollContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px 10px 80px;
  font-size: 12px;
  line-height: 0.5;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 70px;
    background: #0e0e0e;
    animation: ${IndicatorAnimation} 1.5s cubic-bezier(1, 0, 0, 1) infinite;
  }
`;

const ScrollDownIndicator: React.FC = () => {
  return <ScrollContainer>Scroll</ScrollContainer>;
};

export default ScrollDownIndicator;
