import styled, { keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import CircleButtonWrapper from "../common/circleButtonWrapper";
import ViewMoreButton from "../common/viewMoreButton";
import media from "../../styles/mediaQuery";

const ContentWrapper = styled.div`
  display: flex;

  ${media.mobile`
    position: relative;
    flex-direction: column;
  `}
`;

const BodyTextBlock = styled.div`
  max-width: 650px;

  h5 {
    font-weight: normal;
    display: inline-flex;
    align-items: center;
  }

  p {
    margin: 50px 0;
  }

  ${media.mobile`
    h5 {
      font-weight: normal;
      display: inline-flex;
      align-items: center;
    }

    p {
      margin: 0;
    }
  `}
`;

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-50px); }
//   100% { transform: translateY(0px); }
// `;

// const GorillaBubble = styled.img`
//   position: absolute;
//   width: 230px;
//   height: 230px;
//   right: 60%;
//   border-radius: 50%;
//   background: radial-gradient(ellipse at center, #ffffff88, #ccf5ff44);
//   box-shadow: 0 0 30px #a3e4ff88;
//   animation: ${float} 4s ease-in-out infinite;
//   z-index: 1;

//   ${media.mobile`
//     width: 150px;
//     height: 150px;
//     right: 5%;
//     bottom: 60px;
//   `}
// `;

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(15px); }
  100% { transform: translateY(0); }
`;

const GorillaRobotImage = styled.img`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  right: 10%;
  bottom: 50%;
  height: 40vh;
  animation: ${bounce} 1.5s ease-in-out infinite;
  z-index: 200;

  ${media.mobile`
    right: 40%;
    bottom: -30%;
    height: 20vh;
  `}
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
          <h5>『うぇぶくり』</h5>
          <p>
            弊社独自のカリキュラムで、環境構築からマンツーマン指導、チーム開発を通じて、エンジニアとしての基礎を確実に築けます。
          </p>
        </BodyTextBlock>

        {/* <GorillaBubble
          src="/public/images/うぇぶくりゴリラ.png"
          alt="浮かぶゴリラ"
        /> */}

        <CircleButtonWrapper>
          <ViewMoreButton onClick={onViewMoreClick} />
        </CircleButtonWrapper>
        <GorillaRobotImage
          src="/public/images/ゴリラロボ2.png"
          alt="ゴリラロボット"
        />
      </ContentWrapper>
    </SectionLayout>
  );
};

export default LearnSection;
