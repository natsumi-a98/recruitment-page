import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BaseButton from "./common/baseButton";

const SmallEntryButton = styled(BaseButton)`
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 32px;
`

const ArrowRightIconStyled = styled(ArrowRightIcon)`
  font-size: 48px !important;
  margin: 0;
`;

const HeaderEntryButton = () => {
  return (
    <SmallEntryButton>
      <ArrowRightIconStyled />
      ENTRY
    </SmallEntryButton>
  );
};

export default HeaderEntryButton;
