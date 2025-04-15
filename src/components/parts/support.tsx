import styled from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import CircleButtonWrapper from "../common/circleButtonWrapper";
import ViewMoreButton from "../common/viewMoreButton";

const ContentWrapper = styled.div`
  display: flex;
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
          <img src="../../public/images/chtgpt-黒.png" alt="ChatGPTアイコン" />
          <img
            src="../../public/images/chatbot-黒.png"
            alt="チャットbotアイコン"
          />
        </BodyTextBlock>
        <CircleButtonWrapper>
          {/**モーダル表示 */}
          <ViewMoreButton onClick={onViewMoreClick} />
        </CircleButtonWrapper>
      </ContentWrapper>
    </SectionLayout>
  );
};

export default SupportSection;
