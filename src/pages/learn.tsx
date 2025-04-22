import styled from "styled-components";
import ViewMoreTitle from "../components/common/viewMoreTitle";
import BackButton from "../components/common/backButton";
import CircleButtonWrapper from "../components/common/circleButtonWrapper";
import SystemBoxes from "../components/parts/systemBoxes";
import EmployeeBoxes from "../components/parts/employeeBoxes";
import media from "../styles/mediaQuery";
import { BananaRain } from "../components/common/bananaRain";
import { useState, useEffect, useRef } from "react";

const LearnPageContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 0;
`;

const GorillaBackground = styled.img`
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  width: 60%;
  object-fit: cover;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
  transform-origin: top center;
  transition: transform 0.1s ease-out;

  ${media.mobile`
    width: 80%;
  `}
`;

const LearnPageTextBox = styled.div``;

const WebcreateContainer = styled.div`
  margin: 80px 0;
  display: flex;

  ${media.mobile`
    flex-direction: column;
  `}
`;

const WebcreatePng = styled.div`
  img {
    height: 400px;
  }
  p {
    margin: 0;
  }

  ${media.mobile`
  img {
    width: 100%;
    height: auto;
  }
  `}
`;

const WebcreateTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 50px;

  ${media.mobile`
    flex-direction: row;
    margin-left: 0;
  `}
`;

const AssignmentExample = styled.div``;

const TeamDevelopment = styled.div``;

const CareerDevelopment = styled.div``;

const EmployeeModel = styled.div`
  margin-top: 80px;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LearnPage = ({ onClose }: { onClose: () => void }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const newScale = 1 + scrollTop / 2000;
      setScale(Math.min(newScale, 2));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LearnPageContainer ref={containerRef}>
      <GorillaBackground
        src="/images/gorillarobot-front.png"
        alt="ゴリラ背景"
        style={{
          transform: `translateX(-50%) scale(${scale})`,
        }}
      />
      <BananaRain />

      <ViewMoreTitle titleText="Learn" />

      <LearnPageTextBox>
        <h6>『うぇぶくり』</h6>
        <p>
          弊社独自のカリキュラムであり、
          <br />
          社内エンジニアが積み重ねてきた経験の集大成。
        </p>
        <p>
          エンジニアデビューへの必要要件を満たすためのルートを、コースに切り分けて受講いただきます。
        </p>
        <p>
          環境構築の指導から研修講師によるマンツーマン指導、個人課題やチーム開発等を通じて、
          <br />
          エンジニアまでのキャリア下積みが自然と構築できます。
        </p>
      </LearnPageTextBox>

      <WebcreateContainer>
        <WebcreatePng>
          <img src="/images/webcreate-sample.png" alt="うぇぶくり一例画像" />
          <p>▲『うぇぶくり』レッスン画面の一部</p>
        </WebcreatePng>

        <WebcreateTextBox>
          <AssignmentExample>
            <p>『個人課題例』</p>
            <ul>
              <li>レスポンシブHP作成</li>
              <li>JavaScript実装</li>
              <li>掲示板作成</li>
            </ul>
          </AssignmentExample>

          <TeamDevelopment>
            <p>『チーム開発』</p>
            <ul>
              <li>独自SNSの作成</li>
              <li>観葉植物ECサイトの作成</li>
              <li>社内ポータルの作成</li>
              <li>外部事業で扱うHPの作成</li>
            </ul>
          </TeamDevelopment>
        </WebcreateTextBox>
      </WebcreateContainer>

      <CareerDevelopment>
        <h6>キャリア形成を補助する制度</h6>
        <CenterWrapper>
          <SystemBoxes />
        </CenterWrapper>
      </CareerDevelopment>

      <EmployeeModel>
        <h6>社員の給与モデルと案件実績</h6>
        <CenterWrapper>
          <EmployeeBoxes />
        </CenterWrapper>
      </EmployeeModel>

      <CircleButtonWrapper>
        <BackButton onClick={onClose} />
      </CircleButtonWrapper>
    </LearnPageContainer>
  );
};

export default LearnPage;
