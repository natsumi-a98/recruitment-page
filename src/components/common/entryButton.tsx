import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "./baseButton";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";

// PC版のヘッダー、フッター・SP版でスタイル切り替え
type EntryButtonProps = {
  variant: "large" | "medium" | "small" | "tiny";
};

const commonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

// PC版フッター用エントリーボタン
const LargeButton = styled(BaseButton)`
  ${commonStyles};
  width: 720px;
  height: 180px;
  border-radius: 90px;
  font-size: 48px;

  ${media.md`
    display: none;
  `}
`;

// PC版ヘッダー用エントリーボタン
const MediumButton = styled(BaseButton)`
  ${commonStyles};
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 32px;

  ${media.lg`
    display: none;
  `}

  ${media.md`
    display: none;
  `}
`;

// SP版フッター用エントリーボタン
const SmallButton = styled(BaseButton)`
  display: none;

  ${media.md`
    ${commonStyles};
    padding: 0 40px;
    height: 50px;
    border-radius: 35px;
    font-size: 20px;
  `}
`;

// SP版ヘッダー用エントリーボタン
const TinyButton = styled(BaseButton)`
  display: none;

  ${media.md`
    ${commonStyles};
    width: 130px;
    height: 35px;
    border-radius: 17.5px;
    font-size: 16px;
  `}
`;

const EntryButton = ({ variant }: EntryButtonProps) => {
  const handleClick = () => {
    window.location.href = EXTERNAL_LINKS.ENTRY_PAGE;
  };

  switch (variant) {
    case "large":
      return <LargeButton onClick={handleClick}>ENTRY</LargeButton>;
    case "medium":
      return (
        <MediumButton onClick={handleClick}>
          <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
          ENTRY
        </MediumButton>
      );
    case "small":
      return (
        <SmallButton onClick={handleClick}>
          <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          ENTRY
        </SmallButton>
      );
    case "tiny":
      return (
        <TinyButton onClick={handleClick}>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          ENTRY
        </TinyButton>
      );
    default:
      return null;
  }
};

export default EntryButton;
