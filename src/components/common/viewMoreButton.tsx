import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CircleButton from "./circleButton";

interface ViewMoreButtonProps {
  link: string;
}

const ViewMoreButton = ({ link }: ViewMoreButtonProps) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <CircleButton onClick={handleClick}>
      <span>View more</span>
      <PlayArrowOutlinedIcon />
    </CircleButton>
  );
};

export default ViewMoreButton;
