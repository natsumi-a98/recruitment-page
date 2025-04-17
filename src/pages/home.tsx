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
import media from "../styles/mediaQuery";
import CloseIcon from "@mui/icons-material/Close";

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

const CloseButton = styled.button`
  position: sticky;
  top: 0;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 12px;
  background-color: #00e676;
  border-radius: 50%;

  ${media.mobile`
    padding: 8px;
  `}
`;

const ModalContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isClosing",
})<{ isClosing: boolean }>`
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

  ${media.mobile`
    padding: 20px;
    border-radius: 24px;
    width: 98vw;
    height: 90vh;
  `}
`;

const HomePage = () => {
  // モーダルの状態（"support" or "learn" or null）
  const [modal, setModal] = useState<"support" | "learn" | null>(null);
  const ModalBody = modal === "support" ? SupportPage : LearnPage;
  const [isClosing, setIsClosing] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);

  // モーダルを閉じる処理（フェードアウトアニメーションを挟んでから非表示に）
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const modalEl = document.getElementById("modal-content");

    const handleScroll = () => {
      if (!modalEl) return;
      const scrollTop = modalEl.scrollTop;
      const scrollHeight = modalEl.scrollHeight;
      const clientHeight = modalEl.clientHeight;

      const isBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setShowCloseButton(!isBottom);
    };

    if (modalEl) {
      modalEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (modalEl) {
        modalEl.removeEventListener("scroll", handleScroll);
      }
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
        <ModalOverlay onClick={handleClose}>
          <ModalContent
            id="modal-content"
            isClosing={isClosing}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <CloseButton onClick={handleClose} aria-label="Close">
                <CloseIcon fontSize="large" />
              </CloseButton>
            )}
            <ModalBody onClose={handleClose} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default HomePage;
