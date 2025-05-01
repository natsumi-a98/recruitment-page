import styled from "styled-components";
import ViewMoreTitle from "../components/common/viewMoreTitle";
import SystemBoxes from "../components/parts/systemBoxes";
import EmployeeBoxes from "../components/parts/employeeBoxes";
import media from "../styles/mediaQuery";
import BananaRain from "../components/common/bananaRain";
import HighlightText from "../components/common/highlightText";

type LearnPageProps = {
  scrollTop: number;
};

const LearnPageContainer = styled.div`
  z-index: 1;
`;

const GorillaBackground = styled.img<{ scale: number }>`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%) scale(${(props) => props.scale});
  width: 60%;
  transform-origin: top center;
  transition: transform 0.1s linear;
  z-index: -1;
  pointer-events: none;

  ${media.md`
    bottom: 5%;
    width: 80%;
  `}
`;

const LearnPageTextBox = styled.div`
  img {
    width: auto;
    height: 100px;
  }

  ${media.md`
    img {
      width: auto;
      height: 60px;
    }
  `}
`;

const WebcreateContainer = styled.div`
  margin: 80px 0;
  display: flex;

  ${media.md`
    margin: 40px 0;
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

  ${media.md`
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

  p {
    font-size: 20px;
    margin-top: 0;
  }

  ul {
    font-size: 16px;
  }

  ${media.md`
    flex-direction: row;
    margin-left: 0;

    p {
      font-size: 16px;
      margin: 30px 0 12px 0;
    }

    ul {
      font-size: 12px;
      padding: 0 0 0 12px;
    }
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

const LearnPage = ({ scrollTop }: LearnPageProps) => {
  const scale = Math.min(1 + scrollTop / 2000, 2);

  return (
    <LearnPageContainer>
      <BananaRain />

      <GorillaBackground
        src="/images/gorillarobot-front0.05.png"
        alt="背景画像"
        scale={scale}
      />

      <ViewMoreTitle titleText="Learn" />

      <LearnPageTextBox>
        <img
          src="../../../public/images/logo_webCreate.svg"
          alt="うぇぶくりロゴ"
        />
        <h6>うぇぶくり</h6>
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
            <p>
              <HighlightText>個人課題例</HighlightText>
            </p>
            <ul>
              <li>レスポンシブHP作成</li>
              <li>JavaScript実装</li>
              <li>掲示板作成</li>
            </ul>
          </AssignmentExample>

          <TeamDevelopment>
            <p>
              <HighlightText>チーム開発</HighlightText>
            </p>
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
    </LearnPageContainer>
  );
};

export default LearnPage;
