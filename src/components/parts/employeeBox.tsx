import styled from "styled-components";
import BaseButton from "../common/baseButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Box = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
  overflow: hidden;
  border: 3px solid #0e0e0e;
  border-radius: 30px;
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
`;

const YearsText = styled.span`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  & > strong {
    font-size: 12px;
    font-weight: bold;
  }
`;

const JobTag = styled.span`
  font-size: 12px;
  background-color: #00e676;
  color: #000;
  padding: 2px 6px;
`;

const ClickButton = styled(BaseButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 130px;
  height: 35px;
  font-size: 16px;
  border-radius: 17.5px;
`;

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 16px !important;
  margin: 0;
`;

interface EmployeeBoxProps {
  imageUrl: string; // 社員画像
  years: number; // 入社年数
  job: string; // キャリア
  onClick?: () => void;
}

const EmployeeBox = ({ imageUrl, years, job, onClick }: EmployeeBoxProps) => {
  return (
    <Box>
      <EmployeeImage src={imageUrl} alt="社員写真" />
      <InfoWrapper>
        <YearsText>
          入社<strong>{years}</strong>年目
        </YearsText>

        <JobTag>{job}</JobTag>
      </InfoWrapper>
      <ClickButton onClick={onClick}>
        Click! <ArrowForwardIosIconStyled />
      </ClickButton>
    </Box>
  );
};

export default EmployeeBox;
