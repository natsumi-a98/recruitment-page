import { useEffect, useState } from "react";
import MainVisual from "../components/parts/mainVisual";
import WithAISection from "../components/parts/withAi";
import SupportSection from "../components/parts/support";
import LearnSection from "../components/parts/learn";
import DataSection from "../components/parts/data";
import FlowSection from "../components/parts/flow";
import Header from "../components/parts/header";
import Footer from "../components/parts/footer";
import SupportPage from "./support";
import LearnPage from "./learn";
import { keyframes, styled } from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

// モーダルの中身（サポート・学習詳細ページ）
const ModalContent = styled.div<{ isClosing: boolean }>`
  background-color: white;
  padding: 40px;
  border-radius: 100px;
  width: 90vw;
  height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s ease-out;
`;


const HomePage = () => {
  // モーダルの状態（"support" or "learn" or null）
  const [modal, setModal] = useState<"support" | "learn" | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // モーダルを閉じる処理（フェードアウトアニメーションを挟んでから非表示に）
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal(null);
      setIsClosing(false);
    }, 300);
  };

  // モーダル表示時に背景のスクロールを無効化
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <WithAISection />
        <SupportSection onViewMoreClick={() => setModal("support")} />
        <LearnSection onViewMoreClick={() => setModal("learn")} />
        <DataSection />
        <FlowSection />
      </main>
      <Footer />

      {modal && (
        <ModalOverlay>
          <ModalContent isClosing={isClosing}>
            {modal === "support" && <SupportPage onClose={handleClose} />}
            {modal === "learn" && <LearnPage onClose={handleClose} />}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default HomePage;
