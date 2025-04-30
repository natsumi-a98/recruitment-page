import { css } from "styled-components";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } from "../constants/breakpoints";

const media = {
  tablet: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${TABLET_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  mobile: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
};

export default media;
