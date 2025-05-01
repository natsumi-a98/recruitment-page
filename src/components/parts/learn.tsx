import styled, { keyframes } from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import CircleButtonWrapper from "../common/circleButtonWrapper";
import ViewMoreButton from "../common/viewMoreButton";
import media from "../../styles/mediaQuery";

const ContentWrapper = styled.div`
  display: flex;

  ${media.xl`
    flex-direction: column;
  `}
`;

const BodyTextBlock = styled.div`
  max-width: 650px;

  img {
    width: auto;
    height: 100px;
  }

  p {
    margin: 50px 0;
  }

  ${media.md`
    img {
      width: auto;
      height: 40px;
      margin-top: 30px;
    }

    p {
      margin: 0;
    }
  `}
`;

// うぇぶゴリ
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

// 上指してるゴリラ
// const bounce = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(15px); }
//   100% { transform: translateY(0); }
// `;

// const GorillaRobotImage = styled.img`
//   position: absolute;
//   margin: 0 calc(50% - 50vw);
//   right: 8%;
//   bottom:  52%;
//   height: 40vh;
//   animation: ${bounce} 1.5s ease-in-out infinite;
//   z-index: 200;

//   ${media.mobile`
//     right: 40%;
//     bottom: -30%;
//     height: 20vh;
//   `}
// `;

const sway = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(15px); }
  100% { transform: translateX(0); }
`;
const GorillaRobotImage = styled.img`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  right: 15px;
  height: 27vw;
  animation: ${sway} 1s ease-in-out infinite;
  z-index: 200;

  ${media.xl`
    margin-top: 300px;
    height: 45vw;
    right: 20px;
  `}
`;

const CircleButtonWrapperStyled = styled(CircleButtonWrapper)`
  left: 0;
  margin-top: 30px;

  ${media.xl`
    left: -20%;
  `}

  ${media.md`
    left: -20%;
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
          <p>
            弊社独自のカリキュラムで、環境構築からマンツーマン指導、チーム開発を通じて、エンジニアとしての基礎を確実に築けます。
          </p>
          <img
            src="../../../public/images/logo_webCreate.svg"
            alt="うぇぶくりロゴ"
          />
        </BodyTextBlock>
        {/* <GorillaBubble
          src="/images/webcreate-gorilla.png"
          alt="浮かぶゴリラ"
        /> */}
        {/* 上指してるゴリラ
        <GorillaRobotImage
        src="/images/gorillarobot-up.png"
        alt="ゴリラロボット"
        /> */}
        <CircleButtonWrapperStyled>
          <ViewMoreButton onClick={onViewMoreClick} />
        </CircleButtonWrapperStyled>
        <GorillaRobotImage
          src="/images/gorillarobot-left.png"
          alt="ゴリラロボット"
        />
      </ContentWrapper>
    </SectionLayout>
  );
};

export default LearnSection;
