import styled from "styled-components";

const Box = styled.div`
  width: 375px;
  height: 679px;
  padding: 30px;
  background-color: transparent;
  border: 3px solid #0e0e0e;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h5`
  font-size: 32px;
  margin: 30px 0;
`;

const Body = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  & + & {
    margin-top: 20px;
  }
`;

interface SystemBoxProps {
  title: string;
  body: string[];
}

const SystemBox = ({ title, body }: SystemBoxProps) => {
  return (
    <Box>
      {/* タイトル部分 */}
      <Title>{title}</Title>
      {/* 本文部分：body 配列の各要素を Body コンポーネントで表示 */}
      {body.map((paragraph, index) => (
        <Body key={index}>{paragraph}</Body>
      ))}
    </Box>
  );
};

export default SystemBox;
