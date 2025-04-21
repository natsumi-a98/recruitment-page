import styled from "styled-components";
import BaseButton from "../common/baseButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import media from "../../styles/mediaQuery";

interface EmployeeBoxProps {
  imageUrl: string; // 社員画像
  name: string; // 名前
  age: number; // 年齢
  job: string; // キャリア
  onClick?: () => void;
}

const Box = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
  overflow: hidden;
  border: 3px solid #0e0e0e;
  border-radius: 30px;

  ${media.mobile`
      width: 160px;
      height: 160px;
  `}
`;

const EmployeeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 20px;
  display: flex;
  gap: 5px;
  align-items: center;

  ${media.mobile`
    bottom: 40px;
  `}
`;

const NameAgeText = styled.span`
  font-size: 12px;
  background-color: #ffffff;

  ${media.mobile`
    font-size: 8px;
  `}
`;

const JobTag = styled.span`
  font-size: 12px;
  background-color: #00e676;
  color: #000;
  padding: 2px 6px;

  ${media.mobile`
    font-size: 8px;
  `}
`;

const ClickButton = styled(BaseButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 130px;
  height: 35px;
  font-size: 16px;
  border-radius: 17.5px;

  ${media.mobile`
    width: 80px;
    height: 25px;
    font-size: 12px;
  `}
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 16px !important;
  margin: 0;

  ${media.mobile`
    font-size: 12px !important;
  `}
`;

const EmployeeBox = ({ imageUrl, name, age, job, onClick }: EmployeeBoxProps) => {
  return (
    <Box>
      <EmployeeImage src={imageUrl} alt="社員写真" />
      <InfoWrapper>
        <NameAgeText>
          {name} ({age}歳)
        </NameAgeText>

        <JobTag>{job}</JobTag>
      </InfoWrapper>
      <ClickButton onClick={onClick}>
        Click! <ArrowForwardIosIconStyled />
      </ClickButton>
    </Box>
  );
};

export default EmployeeBox;
