import styled from "styled-components";
import SectionTitle from "./common/sectionTitle";
import SectionLayout from "./common/sectionLayout";

const ImageWrapper = styled.div`
  padding-top: 80px;
  max-width: 1154px;
  margin: 0 auto;
`;

const Flow = () => {
  return (
    <SectionLayout>
      <SectionTitle backgroundText="Flow" frontText="ご入社までの流れ" />
      <ImageWrapper>
        <img src="../../public/images/flow.png" alt="ご入社までの流れ" />
      </ImageWrapper>
    </SectionLayout>
  );
};

export default Flow;
