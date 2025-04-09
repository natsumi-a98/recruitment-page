import styled from "styled-components";
import SectionTitle from "./common/sectionTitle";
import SectionLayout from "./common/sectionLayout";

const WithAISection = styled.div``;

const SectionTextBlock = styled.div`
  margin-top: 80px;
  max-width: 650px;

  p {
    margin-bottom: 24px;
  }
`;

const WithAI = () => {
  return (
    <WithAISection>
      <SectionLayout>
        <SectionTitle backgroundText="With AI" frontText="AIと共に進化する" />
        <SectionTextBlock>
          <p>
            「チャットGPT」や「チャットボット」という言葉を耳にしたことがあるのではないでしょうか。
          </p>
          <p>
            大規模言語モデル、生成AI、Transformerモデルなど、技術的な分類だけで見ても数多くのモデルが存在します。
          </p>
          <p>
            昨今のAI技術は急速に進化し、社会のあらゆる場面で活用されています。
            私たちはAI技術もしかり、時代の流れを随時キャッチアップし、開発やデザインなどのクリエイション人材に取って代わられるとしても、適応し、求められ続ける強い人材の育成をしていきます。
          </p>
        </SectionTextBlock>
      </SectionLayout>
    </WithAISection>
  );
};

export default WithAI;
