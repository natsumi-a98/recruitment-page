import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "./baseButton";

const SpEntryButtonComponent = styled(BaseButton)`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 35px;
    border-radius: 17.5px;
  }
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 16px !important;
  margin: 0;
`;

const SpEntryButton = () => {
  return (
    <SpEntryButtonComponent>
      <ArrowForwardIosIconStyled />
      ENTRY
    </SpEntryButtonComponent>
  );
};

export default SpEntryButton;
