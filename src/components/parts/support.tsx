import styled, { keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import CircleButtonWrapper from "../common/circleButtonWrapper";
import ViewMoreButton from "../common/viewMoreButton";
import media from "../../styles/mediaQuery";

const ContentWrapper = styled.div`
  display: flex;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const BodyTextBlock = styled.div`
  max-width: 650px;

  p {
    margin: 50px 0;
  }

  img {
    margin-right: 50px;
    width: 150px;
    height: 150px;
  }

  ${media.tablet`
      p {
        margin: 0;
      }

    img {
      margin-top: 30px;
      margin-right: 0;
      width: 75px;
      height: 75px;
      }
  `}
`;

const sway = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(15px); }
  100% { transform: translateX(0); }
`;

const RobotImage = styled.img`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  right: 15px;
  height: 22vw;
  animation: ${sway} 1s ease-in-out infinite;
  z-index: 200;

  ${media.tablet`
    margin-top: 200px;
    height: 40vw;
    right: 20px;
  `}
`;

const CircleButtonWrapperStyled = styled(CircleButtonWrapper)`
  left: 15%;
  margin-top: 30px;

  ${media.tablet`
      left: -20%;
    `}
`;

interface SupportSectionProps {
  onViewMoreClick: () => void;
}

const SupportSection = ({ onViewMoreClick }: SupportSectionProps) => {
  return (
    <SectionLayout id="support-section">
      <SectionTitle backgroundText="Support" frontText="成長支援" />
      <ContentWrapper>
        <BodyTextBlock>
          <p>
            AIを活用しながら業務を遂行できるプロフェッショナル人材の育成と市場価値の向上を支援します。
          </p>
          <img src="/images/chatgpt.png" alt="ChatGPTアイコン" />
          <img src="/images/chatbot.png" alt="チャットbotアイコン" />
        </BodyTextBlock>
        <CircleButtonWrapperStyled>
          <ViewMoreButton onClick={onViewMoreClick} />
        </CircleButtonWrapperStyled>
        <RobotImage src="/images/robot-left.png" alt="左を指しているロボット" />
      </ContentWrapper>
    </SectionLayout>
  );
};

export default SupportSection;
