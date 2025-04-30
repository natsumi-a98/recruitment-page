import styled from "styled-components";
import SystemBox from "./systemBox";
import media from "../../styles/mediaQuery";
import Meeting from "../../../public/images/meeting.svg";
import Quest from "../../../public/images/quest.svg";
import Benefit from "../../../public/images/benefit.svg";

const SystemBoxesWrapper = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;

  ${media.tablet`
    gap: 15px;
  `}
`;

const systems = [
  {
    title: "キャリア形成面談",
    icon: Meeting,
    body: [
      "定期的な面談を通じて、現在の業務の振り返りや課題の整理を行うとともに、今後目指す方向性や必要となるスキルについて上司やメンターと共有し、成長に向けた具体的な行動計画を立てていきます。",
      "目標設定やアサイン方針の見直し、研修の選定にも活用され、一過性の評価ではなく、継続的な育成・支援につなげていくことを目的としています。",
    ],
  },
  {
    title: "クエスト",
    icon: Quest,
    body: [
      "社内発注制度として、ツール開発、デザインや編集等さまざまな依頼が発生します。",
      "実務経験の浅い方、未経験の方でも経験を積めるよう社内という環境を生かした社内クラウドソーシング制度。",
      "スキルの獲得・強化、ポートフォリオの拡充としてご活用するだけでなく、他社員と関われる要素でもあり、先輩エンジニアの方々からのアドバイス等もいただけます。",
    ],
  },
  {
    title: "学習支援",
    icon: Benefit,
    body: [
      "社員一人ひとりのスキルアップを支援するため、Udemyを無料で利用できる制度と、社内図書制度を提供しています。",
      "Udemyでは最新技術や専門知識を自分のペースで学び、社内図書制度を活用することで、実務に役立つ知識を深めたり、新しい分野への理解を広げることができます。",
      "これらの制度を通じて、業務に必要なスキルを習得し、自己成長を促進することが可能です。",
    ],
  },
];

const SystemBoxes = () => {
  return (
    <SystemBoxesWrapper>
      {systems.map((item, index) => (
        <SystemBox
          key={index}
          title={item.title}
          body={item.body}
          icon={item.icon}
        />
      ))}
    </SystemBoxesWrapper>
  );
};

export default SystemBoxes;
