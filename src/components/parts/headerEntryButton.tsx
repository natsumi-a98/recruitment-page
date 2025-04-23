import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "../common/baseButton";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";

const SmallEntryButton = styled(BaseButton)`
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 32px;

  ${media.mobile`
    display: none;
  `}
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 32px !important;
  margin: 0;
`;

const HeaderEntryButton = () => {
  const handleClick = () => {
    window.location.href = EXTERNAL_LINKS.ENTRY_PAGE;
  };

  return (
    <SmallEntryButton onClick={handleClick}>
      <ArrowForwardIosIconStyled />
      ENTRY
    </SmallEntryButton>
  );
};

export default HeaderEntryButton;
