import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import media from "../../styles/mediaQuery";
import LearnPage from "../../pages/learn";
import SupportPage from "../../pages/support";

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

  ${media.mobile`
    top: 0;
    padding: 8px;
  `}
`;

const ModalContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isClosing",
})<{ isClosing: boolean }>`
  background: linear-gradient(0deg, #e8faff, #ffffff);
  padding: 0 40px;
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

const ModalWrapper: React.FC<Props> = ({ modal, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const ModalBody = modal === "support" ? SupportPage : LearnPage;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const modalEl = document.getElementById("modal-content");

    const handleScroll = () => {
      if (!modalEl) return;
      const isBottom =
        modalEl.scrollTop + modalEl.clientHeight >= modalEl.scrollHeight - 50;
      setShowCloseButton(!isBottom);
    };

    modalEl?.addEventListener("scroll", handleScroll);
    return () => modalEl?.removeEventListener("scroll", handleScroll);
  }, [modal]);

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
  );
};

export default ModalWrapper;
