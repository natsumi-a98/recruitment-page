import styled from "styled-components";
import SectionTitle from "./common/sectionTitle";
import SectionLayout from "./common/sectionLayout";
import CircleButtonWrapper from "./common/circleButtonWrapper";
import ViewMoreButton from "./common/viewMoreButton";

const ContentWrapper = styled.div`
  display: flex;
`;

const BodyTextBlock = styled.div`
  margin-top: 80px;
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

const Support = () => {
  return (
    <SectionLayout>
      <SectionTitle backgroundText="Support" frontText="成長支援" />
      <ContentWrapper>
        <BodyTextBlock>
          <p>
            AIを活用しながら業務を遂行できるプロフェッショナル人材の育成と市場価値の向上を支援します。
          </p>
          <img
            src="../../public/images/icons8-chatgpt-150.png"
            alt="ChatGPTアイコン"
          />
          <img
            src="../../public/images/icons8-chatbot-96.png"
            alt="チャットbotアイコン"
          />
        </BodyTextBlock>
        <CircleButtonWrapper>
          <ViewMoreButton link={""} />
        </CircleButtonWrapper>
      </ContentWrapper>
    </SectionLayout>
  );
};

export default Support;
