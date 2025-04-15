import styled from "styled-components";
import BaseButton from "../common/baseButton";

const Frame = styled.div`
  width: 1114px;
  height: 594px;
  display: flex;
  border: 3px solid #0e0e0e;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;

const LeftImageArea = styled.div`
  position: relative;
  width: 594px;
  height: 594px;
  flex-shrink: 0;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CloseButton = styled(BaseButton)`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 130px;
  height: 35px;
  font-size: 16px;
  border-radius: 17.5px;
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 8px;
`;

const YearsText = styled.span`
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  & > strong {
    font-size: 24px;
    font-weight: bold;
  }
`;

const JobTag = styled.span`
  font-size: 20px;
  background-color: #00e676;
  color: #000;
  padding: 4px 8px;
`;

const RightContent = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #0e0e0e;
  margin: 0 0 8px 0;
`;

const SectionText = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.6;
`;

interface EmployeeDetailFrameProps {
  imageUrl: string;
  years: number;
  job: string;
  onClose: () => void;
  selfIntroduction: string;
  aboutCompany: string;
  goodThings: string;
  message: string;
}

const EmployeeDetailFrame = ({
  imageUrl, // 社員画像
  years, // 入社年数
  job, // キャリア
  onClose,
  selfIntroduction, // 自己紹介
  aboutCompany, // 会社について
  goodThings, // 良かったところ
  message, // ひとこと
}: EmployeeDetailFrameProps) => {
  return (
    <Frame>
      <LeftImageArea>
        <Photo src={imageUrl} alt="社員画像" />
        <CloseButton onClick={onClose}>Close</CloseButton>
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
