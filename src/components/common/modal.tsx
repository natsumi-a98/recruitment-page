import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import media from "../../styles/mediaQuery";
import LearnPage from "../../pages/learn";
import SupportPage from "../../pages/support";
import ScrollDownIndicator from "./scrollDownIndicator";
import BackButton from "./backButton";
import CircleButtonWrapper from "./circleButtonWrapper";

export type ModalKey = "support" | "learn";
type Props = {
  modal: ModalKey;
  onClose: () => void;
};

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
  z-index: 9999;
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
  top: 40px;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 12px;
  background-color: #00e676;
  border-radius: 50%;

  ${media.tablet`
    top: 0;
    padding: 8px;
  `}
`;

const ScrollDownIndicatorWrapper = styled.div<{ $hide: boolean }>`
  position: absolute;
  bottom: 0;
  right: 75px;
  z-index: 5;
  opacity: ${({ $hide: hide }) => (hide ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;

  ${media.tablet`
    display: none;
  `}
`;

const CircleButtonWrapperStyled = styled(CircleButtonWrapper)`
  bottom: 0;
  left: 25%;
  margin: 80px 0;
  z-index: 2;

  ${media.tablet`
    margin: 40px 0;
  `}
`;

const ModalContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isClosing",
})<{ isClosing: boolean }>`
  background: linear-gradient(0deg, #e8faff, #ffffff);
  padding: 0 75px 80px 75px;
  border-radius: 100px;
  width: 90vw;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s ease-out;

  ${media.tablet`
    padding: 20px;
    border-radius: 24px;
    width: 98vw;
    height: 90vh;
  `}
`;

const Modal: React.FC<Props> = ({ modal, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // 閉じるための処理
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // スクロールイベントの監視
  useEffect(() => {
    const modalEl = document.getElementById("modal-content");

    const handleScroll = () => {
      if (!modalEl) return;
      const currentScrollTop = modalEl.scrollTop;
      setScrollTop(currentScrollTop);

      const isBottom =
        currentScrollTop + modalEl.clientHeight >= modalEl.scrollHeight - 50;
      // 下部に達したら閉じるボタンを非表示
      setShowCloseButton(!isBottom);

      if (currentScrollTop > 0 && !isScroll) {
        // スクロールしたらインジケータを非表示
        setIsScroll(true);
      }
    };

    modalEl?.addEventListener("scroll", handleScroll);
    return () => modalEl?.removeEventListener("scroll", handleScroll);
  }, [modal, isScroll]);

  // モーダルが開いている間は背景のスクロールを無効化
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalOverlay onClick={handleClose}>
      {/* モーダル本体のクリックでは閉じないようにイベントを止める */}
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

        {modal === "support" && <SupportPage />}
        {modal === "learn" && <LearnPage scrollTop={scrollTop} />}

        <ScrollDownIndicatorWrapper $hide={isScroll}>
          <ScrollDownIndicator />
        </ScrollDownIndicatorWrapper>

        <CircleButtonWrapperStyled>
          <BackButton onClick={handleClose} />
        </CircleButtonWrapperStyled>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
