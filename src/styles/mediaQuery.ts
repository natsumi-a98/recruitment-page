import { css } from "styled-components";
import {
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
  EXTRA_LARGE_BREAKPOINT,
  LARGE_BREAKPOINT,
} from "../constants/breakpoints";

const media = {
  // 1280px以下のメディアクエリ
  xl: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${EXTRA_LARGE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  // 959px以下のメディアクエリ
  lg: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${LARGE_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  // 768px以下のメディアクエリ
  md: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${MEDIUM_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
  // 450px以下のメディアクエリ
  sm: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${SMALL_BREAKPOINT}px) {
      ${css(...args)}
    }
  `,
};

export default media;
