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

  h3 {
    font-weight: normal;
    font-size: 40px;
    display: inline-flex;
    align-items: center;
  }

  p {
    margin: 50px 0;
  }

  img {
    margin-left: 50px;
    width: 150px;
  }
`;

const Learn = () => {
  return (
    <SectionLayout>
      <SectionTitle backgroundText="Learn" frontText="研修制度" />
      <ContentWrapper>
        <BodyTextBlock>
          <h3>
            『うぇぶくり』
            <img
              src="../../public/images/webcreate-icon.png"
              alt="うぇぶくりアイコン"
            />
          </h3>
          <p>
            弊社独自のカリキュラムで、環境構築からマンツーマン指導、チーム開発を通じて、エンジニアとしての基礎を確実に築けます。
          </p>
        </BodyTextBlock>
        <CircleButtonWrapper>
          <ViewMoreButton link={""} />
        </CircleButtonWrapper>
      </ContentWrapper>
    </SectionLayout>
  );
};

export default Learn;
