import styled from "styled-components";
import SectionTitle from "./common/sectionTitle";
import SectionLayout from "./common/sectionLayout";
import { forwardRef } from "react";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 75px;
  flex-wrap: wrap;
  padding-top: 80px;
  max-width: 1140px;
  margin: 0 auto;
`;

const ImageItem = styled.img<{ width: number }>`
  width: ${(props) => props.width || 330}px;
  height: 330px;
  object-fit: cover;
`;

const Data = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <SectionLayout>
        <SectionTitle backgroundText="Data" frontText="会社データ" />
        <ImageWrapper>
          <ImageItem
            src="../../public/images/社員数.png"
            alt="社員数"
            width={330}
          />
          <ImageItem
            src="../../public/images/男女比.png"
            alt="男女比"
            width={330}
          />
          <ImageItem
            src="../../public/images/平均年齢.png"
            alt="平均年齢"
            width={330}
          />
          <ImageItem
            src="../../public/images/平均残業時間.png"
            alt="平均残業時間"
            width={330}
          />
          <ImageItem
            src="../../public/images/案件先での業務内容青.png"
            alt="案件先での業務内容"
            width={735}
          />
          <ImageItem
            src="../../public/images/使用言語青.png"
            alt="使用言語"
            width={735}
          />
          <ImageItem
            src="../../public/images/未経験者の割合.png"
            alt="未経験者の割合"
            width={330}
          />
        </ImageWrapper>
      </SectionLayout>
    </section>
  );
});

export default Data;
