import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleButton from "./circleButton";

interface BackButtonProps {
  scrollTargetRef: React.RefObject<HTMLElement>;
}

const BackButton = ({ scrollTargetRef }: BackButtonProps) => {
  const handleClick = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CircleButton onClick={handleClick}>
      BACK
      <ArrowBackIcon />
    </CircleButton>
  );
};

export default BackButton;
