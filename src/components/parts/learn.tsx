import styled, { keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import CircleButtonWrapper from "../common/circleButtonWrapper";
import ViewMoreButton from "../common/viewMoreButton";

const ContentWrapper = styled.div`
  display: flex;
`;

const BodyTextBlock = styled.div`
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const GorillaBubble = styled.img`
  position: absolute;
  width: 260px;
  height: 260px;
  right: 40%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #ffffff88, #ccf5ff44);
  box-shadow: 0 0 30px #a3e4ff88;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;
`;

interface LearnSectionProps {
  onViewMoreClick: () => void;
}

const LearnSection = ({ onViewMoreClick }: LearnSectionProps) => {
  return (
    <SectionLayout id="learn-section">
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

        <GorillaBubble src="/images/うぇぶくりゴリラ.png" alt="浮かぶゴリラ" />

        <CircleButtonWrapper>
          {/**モーダル表示 */}
          <ViewMoreButton onClick={onViewMoreClick} />
        </CircleButtonWrapper>
      </ContentWrapper>
    </SectionLayout>
  );
};

export default LearnSection;
