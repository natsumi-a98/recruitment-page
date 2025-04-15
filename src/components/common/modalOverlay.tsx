import styled from "styled-components";
import { ReactNode } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: white;
  overflow-y: scroll;
  animation: slideUp 0.4s ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return <Overlay>{children}</Overlay>;
};

export default ModalOverlay;
