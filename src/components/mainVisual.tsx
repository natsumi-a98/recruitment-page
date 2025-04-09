import styled from "styled-components";

const MainVisualContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 128px;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 96px;
  font-weight: normal;
  margin: 0;
`;

const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const HashTagText = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
`;

const DescriptionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 0;
`;

const MainVisual = () => {
  return (
    <MainVisualContainer>
      <TitleContainer>
        <MainTitle>FEDELTA</MainTitle>
        <SubTitle>RECRUIT</SubTitle>
      </TitleContainer>
      <BottomTextContainer>
        <HashTagText>#AIを標準基準に</HashTagText>
        <DescriptionText>
          それは、単なる技術の導入ではありません。
          <br />
          変化の激しい時代において、常に最前線で活躍するために。
          <br />
          AIを使いこなし、変化を力に変えていく。
          <br />
          そんな人材を、私たちは求めています。
        </DescriptionText>
      </BottomTextContainer>
    </MainVisualContainer>
  );
};

export default MainVisual;
