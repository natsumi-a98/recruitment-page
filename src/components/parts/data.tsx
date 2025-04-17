import styled from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import { useEffect, useState } from "react";
import media from "../../styles/mediaQuery";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 75px;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;

  ${media.mobile`
    gap: 20px;
    max-width: 340px;
  `}
`;

const ImageItem = styled.img`
  height: 330px;
  object-fit: cover;

  ${media.mobile`
    height: 160px;
  `}
`;

const DataSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // PC版の画像データ
  const pcImages = [
    { src: "/images/社員数-黒.png", alt: "社員数" },
    { src: "/images/男女比-黒.png", alt: "男女比" },
    { src: "/images/平均年齢-黒.png", alt: "平均年齢" },
    { src: "/images/平均残業時間-黒.png", alt: "平均残業時間" },
    { src: "/images/業務内容-黒.png", alt: "案件先での業務内容" },
    { src: "/images/使用言語-黒.png", alt: "使用言語" },
    { src: "/images/未経験者の割合-黒.png", alt: "未経験者の割合" },
  ];

  // モバイル版の画像データ
  const spImages = [
    { src: "/images/社員数-sp.png", alt: "社員数" },
    { src: "/images/平均年齢-sp.png", alt: "平均年齢" },
    { src: "/images/業務内容-sp.png", alt: "案件先での業務内容" },
    { src: "/images/平均残業時間-sp.png", alt: "平均残業時間" },
    { src: "/images/未経験者の割合-sp.png", alt: "未経験者の割合" },
    { src: "/images/使用言語-sp.png", alt: "使用言語" },
  ];

  const imagesToRender = isMobile ? spImages : pcImages;

  return (
    <SectionLayout id="data-section">
      <SectionTitle backgroundText="Data" frontText="会社データ" />
      <ImageWrapper>
        {imagesToRender.map((image, index) => (
          <ImageItem key={index} src={image.src} alt={image.alt} />
        ))}
      </ImageWrapper>
    </SectionLayout>
  );
};

export default DataSection;
