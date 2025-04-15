import styled from "styled-components";

interface SectionTitleProps {
  backgroundText: string;
  frontText: string;
}

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
`;

const BackgroundTitle = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 88px;
  font-weight: 400;
  color: rgba(0, 194, 255, 0.20);
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const FrontTitle = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 88px;
  font-weight: bold;
  color: #0e0e0e;
  margin: 0;
  position: relative;
  top: 40px;
  left: 40px;
  z-index: 10;
`;

const SectionTitle: React.FC<SectionTitleProps> = ({
  backgroundText,
  frontText,
}) => {
  return (
    <TitleWrapper>
      <BackgroundTitle>{backgroundText}</BackgroundTitle>
      <FrontTitle>{frontText}</FrontTitle>
    </TitleWrapper>
  );
};

export default SectionTitle;
