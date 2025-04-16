import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "../common/baseButton";

const SmallEntryButton = styled(BaseButton)`
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 32px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 32px !important;
  margin: 0;
`;

const HeaderEntryButton = () => {
  return (
    <SmallEntryButton>
      <ArrowForwardIosIconStyled />
      ENTRY
    </SmallEntryButton>
  );
};

export default HeaderEntryButton;
