import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import media from "../../styles/mediaQuery";
import EntryButton from "../common/entryButton";
import ScrollDownIndicator from "../common/scrollDownIndicator";

const MainVisualContainer = styled.section<{ id?: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${media.md`
    height: calc(100vh - 55px);
  `}
`;

const MainVisualTitleContainer = styled.div`
  text-align: center;
  z-index: 5;
`;

const MainTitle = styled.h1`
  font-weight: 500;
  line-height: 0.9;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-weight: lighter;
  line-height: 0.9;
  margin: 0;
`;

const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 5;

  ${media.md`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
  `}
`;

const HashTagText = styled.h4`
  font-weight: 500;
  margin: 0;
`;

const DescriptionText = styled.p`
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 0;

  ${media.md`
    margin-bottom: 30px;
  `}
`;

const SpEntryButtonWrapper = styled.div`
  display: none;

  ${media.md`
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
  bottom: 200px;
  right: 0;
  height: 35vw;
  z-index: 0;
  transform: translateX(100%);

  ${({ animate }) =>
    animate &&
    css`
      animation: ${SlideInFromRight} 1s ease-out forwards;
    `}

  ${media.md`
    height: 40vw;
    right: 0;
    top: 150px;
  `}
`;

const ScrollDownIndicatorWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;

  ${media.md`
    display: none;
  `}
`;

const MainVisual = () => {
  // ロボット表示の状態管理
  const [showRobot, setShowRobot] = useState(false);
  // DOM要素参照
  const containerRef = useRef<HTMLElement | null>(null);

  // Intersection Observer でロボットを表示するトリガー
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
        // 50%が見えたら発火
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
          AIを活用し変化に適応するだけでなく、主導する。
          <br />
          私たちは、その最前線に立つ人材を求めています。
        </DescriptionText>
        <SpEntryButtonWrapper>
          <EntryButton variant="tiny" />
        </SpEntryButtonWrapper>
      </BottomTextContainer>

      <RobotImage
        src="/images/robot-peek.png"
        alt="右から覗き込むロボット"
        animate={showRobot}
      />
      <ScrollDownIndicatorWrapper>
        <ScrollDownIndicator />
      </ScrollDownIndicatorWrapper>
    </MainVisualContainer>
  );
};

export default MainVisual;
