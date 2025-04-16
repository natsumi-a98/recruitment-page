import styled from "styled-components";
import ViewMoreTitle from "../components/common/viewMoreTitle";
import Inexperienced from "../components/parts/inexperienced";
import BackButton from "../components/common/backButton";
import CircleButtonWrapper from "../components/common/circleButtonWrapper";
import AfterTraining from "../components/parts/afterTraining";
import { useRef, useState } from "react";

const slides = [<Inexperienced />, <AfterTraining />];

const SupportSectionTextBox = styled.div``;

const HighlightText = styled.span`
  background-color: #00e676;
  padding: 0 4px;
`;

const RootContainer = styled.div`
  margin-top: 200px;
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
`;

const HorizontalScrollWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: 40px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const SlideItem = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 24px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: -48px;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: -48px;
`;

const SupportPage = ({ onClose }: { onClose: () => void }) => {
  // スライド対象の要素参照
  const scrollRef = useRef<HTMLDivElement>(null);
  // 現在のスライドインデックス
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // 指定インデックスのスライドにスライドする処理
  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  };

  // 左矢印クリック時の処理
  const handleScrollLeft = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // 右矢印クリック時の処理
  const handleScrollRight = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
  return (
    <main>
      <ViewMoreTitle titleText="Support" />

      <SupportSectionTextBox>
        <h2>「新しいモノ」をキャッチアップする能力</h2>
        <p>
          新たな業務に従事し、その業務を習得・改善するための学習時間があるように、
          <br />
          弊社の育成カリキュラムではエンジニアになるために必要となる、
        </p>
        <p>
          <HighlightText>「キャッチアップする能力」</HighlightText>を
        </p>
        <p>業務の合間に習得が可能なコースを設計しています。</p>
        <p>
          新たな技術、フレームワークやライブラリ等さまざまな分野の学習を進めることで、
          <br />
          自然と、体系的にキャッチアップの習慣化が可能となります。
        </p>
        <p>
          また、学習を進めていく中で、
          <br />
          「現在持ち合わせているスキルの向上」や「今までとは異なるキャリアを進む」等の
          <br />
          見据える先が明確になっていきます。
        </p>
        <p>
          もっとスキルを高めたい業界経験者の方はもちろん、
          <br />
          業界未経験の方でも手厚い研修制度でWEBスキルを学びながら働くことができます。
        </p>
      </SupportSectionTextBox>

      <RootContainer>
        <h2>経験・未経験で進むルート</h2>
        <ArrowButtonLeft onClick={handleScrollLeft}>←</ArrowButtonLeft>
        {/** キャリアイメージをスライダーで表示 */}
        <HorizontalScrollWrapper ref={scrollRef}>
          {slides.map((SlideComponent, index) => (
            <SlideItem key={index}>{SlideComponent}</SlideItem>
          ))}
        </HorizontalScrollWrapper>
        <ArrowButtonRight onClick={handleScrollRight}>→</ArrowButtonRight>
      </RootContainer>

      <CircleButtonWrapper>
        <BackButton onClick={onClose} />
      </CircleButtonWrapper>
    </main>
  );
};

export default SupportPage;
