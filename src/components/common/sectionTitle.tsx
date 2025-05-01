import styled from "styled-components";
import media from "../../styles/mediaQuery";

interface SectionTitleProps {
  backgroundText: string;
  frontText: string;
}

const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 80px;

  ${media.md`
    margin-bottom: 24px;
  `}
`;

const BackgroundTitle = styled.h3`
  font-family: "Abril Fatface", cursive;
  font-weight: 400;
  color: rgba(0, 194, 255, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const FrontTitle = styled.h3`
  font-weight: bold;
  color: #0e0e0e;
  position: relative;
  top: 40px;
  left: 40px;
  z-index: 10;

  ${media.md`
    top: 16px;
    left: 16px;
  `}
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
