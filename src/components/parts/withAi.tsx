import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import media from "../../styles/mediaQuery";
import HighlightText from "../common/highlightText";

const WithAIContainer = styled.section`
  position: relative;
  height: 90vh;
`;

const WithAiSectionTextBlock = styled.div``;

const SlideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const RobotImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<{ animate: boolean }>`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  bottom: -200px;
  left: 50px;
  height: 35vh;
  transform: translateY(100%);
  z-index: 0;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${SlideInFromBottom} 1s ease-out forwards;
    `}

  ${media.tablet`
    height: 40vw;
    bottom: -50px;
    left: 10px;
  `}
`;

const WithAISection = () => {
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
    <WithAIContainer ref={containerRef}>
      <SectionLayout id="with-ai-section">
        <SectionTitle backgroundText="With AI" frontText="AIと共に進化する" />
        <WithAiSectionTextBlock>
          <p>
            <HighlightText>チャットGPT</HighlightText>や
            <HighlightText>チャットボット</HighlightText>
            という言葉を耳にしたことがあるのではないでしょうか。
          </p>
          <p>
            大規模言語モデル、生成AI、Transformerモデルなど、技術的な分類だけで見ても数多くのモデルが存在します。
          </p>
          <p>
            昨今のAI技術は急速に進化し、社会のあらゆる場面で活用されています。
            <br />
            私たちはAI技術もしかり、時代の流れを随時キャッチアップし、開発やデザインなどのクリエイション人材に取って代わられるとしても、
            <br />
            適応し、求められ続ける強い人材の育成をしていきます。
          </p>
        </WithAiSectionTextBlock>
      </SectionLayout>

      <RobotImage
        src="/images/robot-bottom.png"
        alt="下から覗き込むロボット"
        animate={showRobot}
      />
    </WithAIContainer>
  );
};

export default WithAISection;
