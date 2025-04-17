import styled from "styled-components";
import media from "../../styles/mediaQuery";

const CircleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 23%;

  ${media.mobile`
    position: static; /* absolute無効 */
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
  `}
`;

export default CircleButtonWrapper;
