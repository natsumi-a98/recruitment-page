import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ visible: boolean }>`
  position: relative;
  transition: transform 0.4s ease-out;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(100vh)"};
`;

const SlideDown = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return <Wrapper visible={visible}>{children}</Wrapper>;
};

export default SlideDown;
