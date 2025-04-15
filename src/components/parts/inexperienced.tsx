import styled from "styled-components";
import ExampleTimeline from "./timeLine";
import VerticalLinearStepper from "./stepper";

const InexperiencedContainer = styled.div`
  width: 1140px;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
`;

const InexperiencedBlock = styled.div`
  flex: 1;
`;

const InexperiencedTitle = styled.h5`
  font-size: 20px;
  margin: 0;
`;

const Inexperienced = () => {
  return (
    <>
      <h3>未経験者のキャリアイメージ</h3>
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
