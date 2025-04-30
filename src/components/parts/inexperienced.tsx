import styled from "styled-components";
import ExampleTimeline from "./timeLine";
import VerticalLinearStepper from "./stepper";
import media from "../../styles/mediaQuery";

const InexperiencedContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;

  ${media.tablet`
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  `}
`;

const InexperiencedBlock = styled.div`
  flex: 1;
`;

const InexperiencedTitle = styled.h6`
  font-size: 20px;
  margin: 0;
`;

const Inexperienced = () => {
  return (
    <>
      <h6>未経験者のキャリアイメージ</h6>
      <InexperiencedContainer>
        <InexperiencedBlock>
          <InexperiencedTitle>研修スケジュールイメージ</InexperiencedTitle>
          <VerticalLinearStepper />
        </InexperiencedBlock>

        <InexperiencedBlock>
          <InexperiencedTitle>
            研修中 1日のタイムラインイメージ
          </InexperiencedTitle>
          <ExampleTimeline />
        </InexperiencedBlock>
      </InexperiencedContainer>
    </>
  );
};

export default Inexperienced;
