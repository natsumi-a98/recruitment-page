import { css } from "styled-components";
import {
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
  EXTRA_LARGE_BREAKPOINT,
  LARGE_BREAKPOINT,
} from "../constants/breakpoints";

const media = {
  xl: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${EXTRA_LARGE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${LARGE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${MEDIUM_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  sm: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${SMALL_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
};

export default media;
