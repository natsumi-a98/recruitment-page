import styled from "styled-components";
import ViewMoreTitle from "../components/common/viewMoreTitle";
import BackButton from "../components/common/backButton";
import CircleButtonWrapper from "../components/common/circleButtonWrapper";
import SystemBoxes from "../components/parts/systemBoxes";
import EmployeeBoxes from "../components/parts/employeeBoxes";
import media from "../styles/mediaQuery";
import { BananaRain } from "../components/common/bananaRain";
import { useState, useEffect } from "react";

const LearnPageContainer = styled.div``;

const GorillaBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/gorillarobot-front.png") no-repeat center top;
  background-size: cover;
  opacity: 0.1;
  z-index: -1;
  transition: transform 0.3s ease-out;
  will-change: transform;
`;

const LearnSectionTextBox = styled.div``;

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <LearnPageContainer>
      <GorillaBackground
        style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
      />
      <BananaRain />
      <ViewMoreTitle titleText="Learn" />

      <LearnSectionTextBox>
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
      </LearnSectionTextBox>

      <WebcreateContainer>
        <WebcreatePng>
          <img
            src="/images/webcreate-sample.png"
            alt="うぇぶくり一例画像"
          />
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
