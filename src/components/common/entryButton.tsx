import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "./baseButton";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";

// PC版のヘッダー、フッター・SP版でスタイル切り替え
type EntryButtonProps = {
  variant: "big" | "small" | "sp";
};

const commonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// フッター用エントリーボタン
const BigButton = styled(BaseButton)`
  ${commonStyles};
  height: 180px;
  width: 720px;
  border-radius: 90px;
  font-size: 48px;

  ${media.mobile`
    display: none;
  `}
`;

// ヘッダー用エントリーボタン
const SmallButton = styled(BaseButton)`
  ${commonStyles};
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 32px;

  ${media.mobile`
    display: none;
  `}
`;

// SP版用エントリーボタン
const SpButton = styled(BaseButton)`
  display: none;

  ${media.mobile`
    ${commonStyles};
    width: 130px;
    height: 35px;
    border-radius: 17.5px;
    font-size: 16px;
  `}
`;

const StyledArrowIcon = styled(ArrowForwardIosIcon)<{ size: number }>`
  font-size: ${({ size }) => size}px !important;
  margin: 0 8px 0 0;
`;

const EntryButton = ({ variant }: EntryButtonProps) => {
  const handleClick = () => {
    window.location.href = EXTERNAL_LINKS.ENTRY_PAGE;
  };

  switch (variant) {
    case "big":
      return <BigButton onClick={handleClick}>ENTRY</BigButton>;
    case "small":
      return (
        <SmallButton onClick={handleClick}>
          <StyledArrowIcon size={32} />
          ENTRY
        </SmallButton>
      );
    case "sp":
      return (
        <SpButton onClick={handleClick}>
          <StyledArrowIcon size={16} />
          ENTRY
        </SpButton>
      );
    default:
      return null;
  }
};

export default EntryButton;
