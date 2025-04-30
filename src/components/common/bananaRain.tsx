import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bananaImage from "../../../public/images/banana.png";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";

// バナナがデスクトップ画面で落ちるアニメーション（PC）
const fallDesktop = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(280vh) rotate(360deg);
    opacity: 0;
  }
`;

// バナナがモバイル画面で落ちるアニメーション（SP）
const fallMobile = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(220vh) rotate(360deg);
    opacity: 0;
  }
`;

interface BananaProps {
  id: number;
  left: number;
  duration: number;
  size: number;
}

// バナナ画像のスタイル定義（ランダムな位置・サイズ・アニメーションを受け取る）
const Banana = styled.img<{
  $left: number;
  $duration: number;
  $size: number;
  $isMobile: boolean;
}>`
  position: absolute;
  top: -100px; // 初期位置（画面の外）
  left: ${({ $left }) => $left}%; // 横位置をランダム指定
  width: ${({ $size }) => $size}px; // サイズをランダム指定
  animation: ${({ $isMobile }) => ($isMobile ? fallMobile : fallDesktop)}
    ${({ $duration }) => $duration}s linear forwards; // デバイスごとの落下アニメーション
  pointer-events: none; // クリックなどのイベントを無効化
  z-index: -1;
`;

const BananaRain = () => {
  // 落下中のバナナを管理する state
  const [bananas, setBananas] = useState<BananaProps[]>([]);
  // 画面幅によってモバイルかどうか判定
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

  useEffect(() => {
    // 一定間隔で新しいバナナを生成する interval 設定
    const interval = setInterval(
      () => {
        const newBanana: BananaProps = {
          id: Date.now(), // 一意なIDとしてタイムスタンプを使用
          left: Math.random() * 100, // 横位置をランダムに
          duration: isMobile ? 6 + Math.random() * 1.5 : 7 + Math.random() * 2, // 落下時間
          size: isMobile ? 20 + Math.random() * 20 : 30 + Math.random() * 30, // サイズ
        };

        // 新しいバナナを追加
        setBananas((prev) => [...prev, newBanana]);

        // 指定時間後にそのバナナを削除して state をクリーンに保つ
        setTimeout(() => {
          setBananas((prev) => prev.filter((b) => b.id !== newBanana.id));
        }, newBanana.duration * 1000);
      },
      isMobile ? 500 : 300
    ); // モバイルは少し間隔をあけて落とす

    // コンポーネントのアンマウント時に interval をクリア
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {bananas.map((banana) => (
        <Banana
          key={banana.id}
          src={bananaImage}
          $left={banana.left}
          $duration={banana.duration}
          $size={banana.size}
          $isMobile={isMobile}
        />
      ))}
    </>
  );
};

export default BananaRain;
