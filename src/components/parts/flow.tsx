import styled from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";

const StepWrapper = styled.div`
width:1140px;
margin: 0 auto;
`;

const FlowContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: -34px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StepBox = styled.div`
  width: 300px;
  height: 185px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`;

const StepInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

const StepText = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 32px;
`;

const StepNumber = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 48px;
`;

const Triangle = styled.div`
  position: absolute;
  bottom: -17px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 63.5px solid transparent;
  border-right: 63.5px solid transparent;
  border-top: 34px solid #00e676;
`;

const ContentBox = styled.div`
  width: 840px;
  height: 185px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

const ContentInner = styled.div`
  margin-left: 90px;
`;

const ContentTitle = styled.div`
  font-size: 32px;
  margin-bottom: 14px;
`;

const ContentDescription = styled.div`
  font-size: 20px;
  line-height: 34px;
`;

const Divider = styled.div`
  width: 1140px;
  height: 1px;
  background-color: #0e0e0e;
  margin: 34px auto 0;
`;

const steps = [
  {
    step: 1,
    title: "面接",
    description: `面接は2回実施予定です。\n事業説明やFEDELTAでの働き方、\n求職者様のキャリアプランを聞かせてください。`,
  },
  {
    step: 2,
    title: "内定",
    description: `入社説明\n注意事項\n雇用条件`,
  },
  {
    step: 3,
    title: "入社準備",
    description: `現場選定\n入社手続き`,
  },
  {
    step: 4,
    title: "入社",
    description: "業務開始",
  },
];

const FlowSection = () => {
  return (
    <SectionLayout id="flow-section">
      <SectionTitle backgroundText="Flow" frontText="ご入社までの流れ" />
      {steps.map((item, index) => (
        <StepWrapper key={item.step}>
          <FlowContainer>
            <StepBox>
              <StepInner>
                <StepText>STEP</StepText>
                <StepNumber>{item.step}</StepNumber>
                {index < steps.length - 1 && <Triangle />}
              </StepInner>
            </StepBox>

            <ContentBox>
              <ContentInner>
                <ContentTitle>{item.title}</ContentTitle>
                <ContentDescription>
                  {item.description.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </ContentDescription>
              </ContentInner>
            </ContentBox>
          </FlowContainer>
          {index < steps.length - 1 && <Divider />}
        </StepWrapper>
      ))}
    </SectionLayout>
  );
};

export default FlowSection;
