import { styled } from "styled-components";

const GradationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.6),
      transparent 60%
    ),
    radial-gradient(
      circle at 80% 40%,
      rgba(200, 255, 255, 0.3),
      transparent 70%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(180, 240, 255, 0.4),
      transparent 80%
    ),
    linear-gradient(135deg, rgba(230, 250, 255, 0.8), rgba(255, 255, 255, 0.5));
  background-size: 200% 200%;
  animation: moveGradation 5s ease-in-out infinite;
  z-index: -1;

  @keyframes moveGradation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const GradationBackground = () => {
  return <GradationContainer />;
};

export default GradationBackground;
