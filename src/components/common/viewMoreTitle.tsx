import styled from "styled-components";
import media from "../../styles/mediaQuery";

interface ViewMoreTitleProps {
  titleText: string;
}

const ViewMoreTitleWrapper = styled.div`
  width: 100%;
  margin: 80px 0;

  ${media.mobile`
    margin: 30px 0;
  `}
`;

const ViewMoreTitleText = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 88px;
  font-weight: 400;
  text-align: center;
  margin: 0;

  ${media.mobile`
    font-size: 32px;
    font-weight: 400;
  `}
`;

const ViewMoreTitle: React.FC<ViewMoreTitleProps> = ({ titleText }) => {
  return (
    <ViewMoreTitleWrapper>
      <ViewMoreTitleText>{titleText}</ViewMoreTitleText>
    </ViewMoreTitleWrapper>
  );
};

export default ViewMoreTitle;
