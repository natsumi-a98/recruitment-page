import styled from "styled-components";
import BaseButton from "../common/baseButton";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";

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
  const handleClick = () => {
    window.location.href = EXTERNAL_LINKS.ENTRY_PAGE;
  };

  return <BigEntryButton onClick={handleClick}>ENTRY</BigEntryButton>;
};

export default FooterEntryButton;
