import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CircleButton from "./circleButton";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      <ArrowBackIosIcon sx={{
        fontSize: {
          sx: 24,
          sm: 32,
        },
      }}/>
      BACK
    </CircleButton>
  );
};

export default BackButton;
