import styled from "styled-components";
import BaseButton from "../common/baseButton";
import media from "../../styles/mediaQuery";

const BigEntryButton = styled(BaseButton)`
  height: 180px;
  width: 720px;
  border-radius: 90px;
  font-size: 48px;

  ${media.mobile`
    display: none;
  `}
`;

const FooterEntryButton = () => {
  return <BigEntryButton>ENTRY</BigEntryButton>;
};

export default FooterEntryButton;
