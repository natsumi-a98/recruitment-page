import styled from "styled-components";
import media from "../../styles/mediaQuery";

const Box = styled.div`
  width: 30%;
  height: auto;
  padding: 30px;
  background-color: transparent;
  border: 3px solid #0e0e0e;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  margin: 0 auto;

  ${media.tablet`
    width: 60%;
    padding: 15px;
  `}
  
  ${media.mobile`
    width: 80%;
    padding: 15px;
  `}
`;

const Title = styled.h6`
  margin: 30px 0;

  ${media.tablet`
    margin: 15px 0;
  `}
`;

const Body = styled.p`
  margin: 0;
  & + & {
    margin-top: 20px;
  }
`;

interface SystemBoxProps {
  title: string;
  body: string[];
}

// 引用符で囲まれた部分を太字にする関数
const formatText = (text: string) => {
  return text.split(/(".*?")/).map((part, index) =>
    part.startsWith('"') && part.endsWith('"') ? (
      <strong key={index}>{part.slice(1, -1)}</strong> // 引用符を除去して太字にする
    ) : (
      part
    )
  );
};

const SystemBox = ({ title, body }: SystemBoxProps) => {
  return (
    <Box>
      {/* タイトル部分 */}
      <Title>{title}</Title>
      {/* 本文部分：body 配列の各要素を Body コンポーネントで表示 */}
      {body.map((paragraph, index) => (
        <Body key={index}>{formatText(paragraph)}</Body> // formatTextを使用
      ))}
    </Box>
  );
};

export default SystemBox;
