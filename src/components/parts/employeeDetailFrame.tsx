import styled from "styled-components";
import BaseButton from "../common/baseButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import media from "../../styles/mediaQuery";

const Frame = styled.div`
  width: 1114px;
  height: 594px;
  display: flex;
  border: 3px solid #0e0e0e;
  border-radius: 30px;
  overflow: hidden;
  position: relative;

  ${media.mobile`
    width: 98%;
    flex-direction: column;
    height: auto;
  `}
`;

const LeftImageArea = styled.div`
  position: relative;
  width: 594px;
  height: 594px;

  ${media.mobile`
    width: 45%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  `}
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${media.mobile`
    width: 100%;
    height: 100%;
  `}
`;

const CloseButton = styled(BaseButton)`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 130px;
  height: 35px;
  font-size: 16px;
  border-radius: 17.5px;

  ${media.mobile`
    position: relative;
    left: 10px;
    bottom: 0;
  `}
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 8px;
`;

const YearsText = styled.span`
  background-color: rgba(255, 255, 255, 0.5);
  & > strong {
    font-size: 24px;
    font-weight: bold;
  }

  ${media.mobile`
    font-size: 12px;
    & > strong {
      font-size: 16px;
    }
  `}
`;

const JobTag = styled.span`
  background-color: #00e676;
  color: #000;
  padding: 4px 8px;

  ${media.mobile`
    font-size: 12px;
    padding: 3px 6px;
  `}
`;

const RightContent = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;

  ${media.mobile`
    padding: 20px;
    margin-left: 45%;
  `}
`;

const Section = styled.div`
  margin-bottom: 40px;

  ${media.mobile`
    margin-bottom: 10px;
  `}
`;

const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #0e0e0e;
  margin: 0 0 8px 0;

  ${media.mobile`
    font-size: 16px;
  `}
`;

const SectionText = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.6;

  ${media.mobile`
    font-size: 14px;
  `}
`;

interface EmployeeDetailFrameProps {
  imageUrl: string; // 社員画像
  years: number; // 入社年数
  job: string; // キャリア
  onClose: () => void;
  selfIntroduction: string; // 自己紹介
  aboutCompany: string; // 会社について
  goodThings: string; // 良かったところ
  message: string; // ひとこと
}

const EmployeeDetailFrame = ({
  imageUrl,
  years,
  job,
  onClose,
  selfIntroduction,
  aboutCompany,
  goodThings,
  message,
}: EmployeeDetailFrameProps) => {
  return (
    <Frame>
      <LeftImageArea>
        <Photo src={imageUrl} alt="社員画像" />
        <CloseButton onClick={onClose}>
          Close
          <KeyboardArrowDownIcon />
        </CloseButton>
      </LeftImageArea>

      <RightContent>
        <TagWrapper>
          <YearsText>
            入社 <strong>{years}</strong> 年目
          </YearsText>
          <JobTag>{job}</JobTag>
        </TagWrapper>

        <Section>
          <SectionTitle>自己紹介</SectionTitle>
          <SectionText>{selfIntroduction}</SectionText>
        </Section>

        <Section>
          <SectionTitle>FEDELTAってどんな会社？</SectionTitle>
          <SectionText>{aboutCompany}</SectionText>
        </Section>

        <Section>
          <SectionTitle>入社して良かったこと</SectionTitle>
          <SectionText>{goodThings}</SectionText>
        </Section>

        <Section>
          <SectionTitle>これから入社するあなたに一言！</SectionTitle>
          <SectionText>{message}</SectionText>
        </Section>
      </RightContent>
    </Frame>
  );
};

export default EmployeeDetailFrame;
