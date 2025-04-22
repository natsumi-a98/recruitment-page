import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import SpEntryButton from "../common/spEntryButton";
import media from "../../styles/mediaQuery";

const MainVisualContainer = styled.section<{ id?: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${media.mobile`
    height: 100vh;
  `}
`;

const MainVisualTitleContainer = styled.div`
  text-align: center;
  z-index: 5;
`;

const MainTitle = styled.h1`
  font-size: 128px;
  font-weight: bold;
  line-height: 0.9;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 64px;
  }
`;

const SubTitle = styled.h2`
  font-size: 96px;
  font-weight: lighter;
  line-height: 0.9;
  margin: 0;

  ${media.mobile`
    font-size: 48px;
  `}
`;

const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;

  ${media.mobile`
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
  `}
`;

const HashTagText = styled.h4`
  font-weight: bold;
  margin: 0;
`;

const DescriptionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 0;

  ${media.mobile`
    font-size: 16px;
    margin-bottom: 30px;
  `}
`;

const SpEntryButtonWrapper = styled.div`
  display: none;

  ${media.mobile`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  `}
`;

const SlideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const RobotImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<{ animate: boolean }>`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  bottom: 0;
  right: 0;
  height: 60vh;
  z-index: 0;
  transform: translateX(100%);

  ${({ animate }) =>
    animate &&
    css`
      animation: ${SlideInFromRight} 1s ease-out forwards;
    `}

  ${media.mobile`
    height: 40vh;
    right: 0;
    top: 10px;
  `}
`;

const MainVisual = () => {
  const [showRobot, setShowRobot] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRobot(false);
          setTimeout(() => {
            setShowRobot(true);
          }, 100);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <MainVisualContainer id="main-visual" ref={containerRef}>
      <MainVisualTitleContainer>
        <MainTitle>FEDELTA</MainTitle>
        <SubTitle>RECRUIT</SubTitle>
      </MainVisualTitleContainer>

      <BottomTextContainer>
        <HashTagText>#AIを標準基準に</HashTagText>
        <DescriptionText>
          それは、単なる技術の導入ではありません。
          <br />
          変化の激しい時代において、常に最前線で活躍するために。
          <br />
          AIを使いこなし、変化を力に変えていく。
          <br />
          そんな人材を、私たちは求めています。
        </DescriptionText>
        <SpEntryButtonWrapper>
          <SpEntryButton />
        </SpEntryButtonWrapper>
      </BottomTextContainer>

      <RobotImage
        src="/images/robot-peek.png"
        alt="右から覗き込むロボット"
        animate={showRobot}
      />
    </MainVisualContainer>
  );
};

export default MainVisual;
