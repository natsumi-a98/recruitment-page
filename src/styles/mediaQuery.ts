import { css } from "styled-components";

const media = {
  mobile: (...args: Parameters<typeof css>) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
};

export default media;
