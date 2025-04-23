import styled from "styled-components";
import media from "../../styles/mediaQuery";

const Text = styled.p`
  font-size: 12px;
  color: #b0bec5;
  text-align: center;
  margin: 0;

  ${media.mobile`
    font-size: 10px;
  `}
`;

const AnnotationText = ({ text }: { text: string }) => {
  return <Text>{text}</Text>;
};

export default AnnotationText;
