import styled from "styled-components";
import SectionTitle from "../common/sectionTitle";
import SectionLayout from "../common/sectionLayout";
import { useEffect, useState } from "react";
import media from "../../styles/mediaQuery";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import AnnotationText from "../common/annotationText";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 75px;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;

  ${media.tablet`
    gap: 20px;
    max-width: 340px;
  `}
`;

const ImageItem = styled.img`
  height: 330px;
  object-fit: cover;

  ${media.tablet`
    height: 160px;
  `}
`;

const DataSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // PC版の画像データ
  const pcImages = [
    { src: "/images/employees-pc.png", alt: "社員数" },
    { src: "/images/ratio.png", alt: "男女比" },
    { src: "/images/average-age-pc.png", alt: "平均年齢" },
    { src: "/images/average-overtime-pc.png", alt: "平均残業時間" },
    { src: "/images/business-content-pc.png", alt: "案件先での業務内容" },
    { src: "/images/programming-languages-pc.png", alt: "使用言語" },
    { src: "/images/inexperienced-pc.png", alt: "未経験者の割合" },
  ];

  // モバイル版の画像データ
  const spImages = [
    { src: "/images/employees-sp.png", alt: "社員数" },
    { src: "/images/average-age-sp.png", alt: "平均年齢" },
    { src: "/images/business-content-sp.png", alt: "案件先での業務内容" },
    { src: "/images/average-overtime-sp.png", alt: "平均残業時間" },
    { src: "/images/inexperienced-sp.png", alt: "未経験者の割合" },
    { src: "/images/programming-languages-sp.png", alt: "使用言語" },
  ];

  const imagesToRender = isMobile ? spImages : pcImages;

  return (
    <SectionLayout id="data-section">
      <SectionTitle backgroundText="Data" frontText="会社データ" />
      <ImageWrapper>
        {imagesToRender.map((image, index) => (
          <ImageItem key={index} src={image.src} alt={image.alt} />
        ))}
        <AnnotationText text="※2024年4月2日時点" />
      </ImageWrapper>
    </SectionLayout>
  );
};

export default DataSection;
