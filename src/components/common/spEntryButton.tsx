import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "./baseButton";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";

const SpEntryButtonComponent = styled(BaseButton)`
  display: none;

  ${media.mobile`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 35px;
    border-radius: 17.5px;
  `}
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 16px !important;
  margin: 0;
`;

const SpEntryButton = () => {
  const handleClick = () => {
    window.location.href = EXTERNAL_LINKS.ENTRY_PAGE;
  };

  return (
    <SpEntryButtonComponent onClick={handleClick}>
      <ArrowForwardIosIconStyled />
      ENTRY
    </SpEntryButtonComponent>
  );
};

export default SpEntryButton;
