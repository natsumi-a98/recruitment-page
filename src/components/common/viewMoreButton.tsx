import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleButton from "./circleButton";

interface ViewMoreButtonProps {
  onClick: () => void;
}

const ViewMoreButton = ({ onClick }: ViewMoreButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      View more
      <ArrowForwardIosIcon sx={{
        fontSize: {
          xs: 24,
          sm: 32,
        },
      }}/>
    </CircleButton>
  );
};

export default ViewMoreButton;
