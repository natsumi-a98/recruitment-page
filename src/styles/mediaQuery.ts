import { css } from "styled-components";
import { MOBILE_BREAKPOINT } from "../constants/breakpoints";

const media = {
  mobile: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
};

export default media;
