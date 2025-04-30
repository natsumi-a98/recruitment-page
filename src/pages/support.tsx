import styled from "styled-components";
import ViewMoreTitle from "../components/common/viewMoreTitle";
import Inexperienced from "../components/parts/inexperienced";
import AfterTraining from "../components/parts/afterTraining";
import { useRef, useState } from "react";
import media from "../styles/mediaQuery";
import HighlightText from "../components/common/highlightText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [<Inexperienced />, <AfterTraining />];

const SupportPageContainer = styled.div``;

const HighlightedHeading = styled.h6`
  line-height: 1.5;

  ${media.tablet`
    span {
      display: block;
    }
  `}
`;

const SupportSectionTextBox = styled.div`
  flex: 1;
`;

const RootContainer = styled.div`
  flex: 1;
  overflow: hidden;
  max-width: 100%;
  position: relative;
  margin: 200px auto 0 auto;
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: 40px;
  padding: 0 24px;

  ${media.tablet`
    flex-direction: column;
    overflow: visible;
    gap: 30px;
    padding: 0;
  `}
`;

const SlideItem = styled.div`
  flex: 0 0 100%;

  ${media.tablet`
    flex: none;
    width: 100%;
  `}
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  font-size: 24px;
  border: none;
  padding: 10px;
  cursor: pointer;

  ${media.tablet`
    display: none;
  `}
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 0;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 0;
`;

const RotatingRobot = styled.img<{ $isPaused: boolean }>`
  position: absolute;
  right: 30px;
  transform: translateY(-50%);
  width: 25vw;
  cursor: pointer;
  animation: rotateY 2s linear infinite;
  animation-play-state: ${(
    { $isPaused } // isPaused が true なら常に止める。false の場合は PC のみ hover で停止
  ) => ($isPaused ? "paused" : "running")};

  ${media.tablet`
    right: 0;
  `}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes rotateY {
    from {
      transform: translateY(-50%) rotateY(0deg);
    }
    to {
      transform: translateY(-50%) rotateY(360deg);
    }
  }
`;

const SupportPage = () => {
  // スライド対象の要素参照
  const scrollRef = useRef<HTMLDivElement>(null);
  // 現在のスライドインデックス
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const [isPaused, setIsPaused] = useState(false);

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
  const handleSlideLeft = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // 右矢印クリック時の処理
  const handleSlideRight = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleTap = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <SupportPageContainer>
      <ViewMoreTitle titleText="Support" />

      <RotatingRobot
        src="/images/robot-dancing.png"
        alt="回っているロボット"
        onClick={handleTap}
        $isPaused={isPaused}
      />

      <SupportSectionTextBox>
        <HighlightedHeading>
          <span>「新しいモノ」を</span>
          <span>キャッチアップする能力</span>
        </HighlightedHeading>
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
          <HighlightText>現在持ち合わせているスキルの向上</HighlightText>や
          <HighlightText>今までとは異なるキャリアを進む</HighlightText>等の
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
        <h6>経験・未経験で進むルート</h6>
        <ArrowButtonLeft onClick={handleSlideLeft}>
          <ArrowBackIosIcon sx={{ fontSize: 36 }} />
        </ArrowButtonLeft>
        <SliderWrapper ref={scrollRef}>
          {slides.map((SlideComponent, index) => (
            <SlideItem key={index}>{SlideComponent}</SlideItem>
          ))}
        </SliderWrapper>
        <ArrowButtonRight onClick={handleSlideRight}>
          <ArrowForwardIosIcon sx={{ fontSize: 36 }} />
        </ArrowButtonRight>
      </RootContainer>
    </SupportPageContainer>
  );
};

export default SupportPage;
