import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleButton from "./circleButton";

interface ViewMoreButtonProps {
  onClick: () => void;
}

const ViewMoreButton = ({ onClick }: ViewMoreButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      View more
      <ArrowForwardIosIcon />
    </CircleButton>
  );
};

export default ViewMoreButton;
