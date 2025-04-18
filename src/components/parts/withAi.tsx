import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import media from "../../styles/mediaQuery";

const WithAIContainer = styled.section`
  position: relative;
  height: 100vh;

  ${media.mobile`
    height: 90vh;
  `}
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
  bottom: -250px;
  left: 0;
  height: 45vh;
  transform: translateY(100%);
  z-index: 0;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${SlideInFromBottom} 1s ease-out forwards;
    `}

  ${media.mobile`
    height: 35vh;
    bottom: -50px;
  `}
`;

const WithAISection = () => {
  const [showRobot, setShowRobot] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 表示領域に入ったらロボット出てくる
        if (entry.isIntersecting) {
          setShowRobot(false);
          setTimeout(() => {
            setShowRobot(true);
          }, 100);
        }
      },
      {
        // WithAISection50%表示されたら
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <WithAIContainer ref={containerRef}>
      <SectionLayout id="with-ai-section">
        <SectionTitle backgroundText="With AI" frontText="AIと共に進化する" />
        <WithAiSectionTextBlock>
          <p>
            「チャットGPT」や「チャットボット」という言葉を耳にしたことがあるのではないでしょうか。
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
        src="/public/images/ロボ2.png"
        alt="下から覗き込むロボット"
        animate={showRobot}
      />
    </WithAIContainer>
  );
};

export default WithAISection;
