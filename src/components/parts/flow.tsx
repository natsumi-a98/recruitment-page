import styled from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import media from "../../styles/mediaQuery";

const StepWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  ${media.md`
    width: 90%;
  `}
`;

const FlowContainer = styled.div`
  display: flex;
  margin-bottom: -34px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.md`
    align-items: center;
    margin-bottom: -20px;
  `}
`;

const StepBox = styled.div`
  width: 300px;
  height: 185px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${media.md`
    width: 40%;
    height: auto;
  `}
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

  ${media.md`
    font-size: 24px;
  `}
`;

const StepNumber = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 48px;

  ${media.md`
    font-size: 32px;
  `}
`;

const ContentBox = styled.div`
  width: 840px;
  height: 185px;
  display: flex;
  align-items: center;

  ${media.md`
    width: 100%;
    height: auto;
  `}
`;

const ContentInner = styled.div`
  margin-left: 90px;

  ${media.md`
    margin-left: 10px;
  `}
`;

const ContentTitle = styled.div`
  font-size: 32px;
  margin-bottom: 14px;
  font-weight: bold;

  ${media.md`
    font-size: 20px;
    margin-bottom: 0;
  `}
`;

const ContentDescription = styled.div`
  font-size: 20px;

  ${media.md`
    font-size: 16px;
  `}
`;

const DividerWrapper = styled.div`
  position: relative;
  height: 34px;
  margin: 40px auto 0 auto;

  ${media.md`
    height: 20px;
    margin-top: 20px;
  `}
`;

const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 13%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 63.5px solid transparent;
  border-right: 63.5px solid transparent;
  border-top: 34px solid #00e676;
  z-index: 5;

  ${media.md`
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 20px solid #00e676;
  `}
`;

const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #0e0e0e;
`;

const steps = [
  {
    step: 1,
    title: "面接",
    description: [
      "面接は2回実施予定です。",
      "事業説明やFEDELTAでの働き方、",
      "求職者様のキャリアプランを聞かせてください。",
    ],
  },
  {
    step: 2,
    title: "内定",
    description: ["入社説明", "注意事項", "雇用条件"],
  },
  {
    step: 3,
    title: "入社準備",
    description: ["現場選定", "入社手続き"],
  },
  {
    step: 4,
    title: "入社",
    description: ["業務開始"],
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
              </StepInner>
            </StepBox>

            <ContentBox>
              <ContentInner>
                <ContentTitle>{item.title}</ContentTitle>
                <ContentDescription>
                  {item.description.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </ContentDescription>
              </ContentInner>
            </ContentBox>
          </FlowContainer>

          {index < steps.length - 1 && (
            <DividerWrapper>
              <Triangle />
              <Divider />
            </DividerWrapper>
          )}
        </StepWrapper>
      ))}
    </SectionLayout>
  );
};

export default FlowSection;
