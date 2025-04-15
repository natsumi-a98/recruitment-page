import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CircleButton from "./circleButton";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      <ArrowBackIosIcon />
      BACK
    </CircleButton>
  );
};

export default BackButton;
