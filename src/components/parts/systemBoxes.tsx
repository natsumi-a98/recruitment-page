import styled from "styled-components";
import SystemBox from "./systemBox";

const SystemBoxesWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const SystemBoxes = () => {
  return (
    <SystemBoxesWrapper>
      <SystemBox
        title="帰社日"
        body={[
          "4半期に一度、本社・就業先(SES)へ赴いているスタッフ全員で開催する社員交流会。",
          "全員がZoom上で集う「オンライン帰社日」、首都圏でいち会場を貸し切り開催する「リアル帰社日」、会社の新たな制度や改正点等の情報共有、日々関わることの少ないスタッフ方との雑談会や技術交流、レクリエーション会、発足した委員会の活動報告など、都度開催内容をバージョンアップしています。",
        ]}
      />
      <SystemBox
        title="クエスト"
        body={[
          "社内発注制度として、ツール開発、デザインや編集等さまざまな依頼が発生します。",
          "実務経験の浅い方、未経験の方でも経験を積めるよう社内という環境を生かした社内クラウドソーシング制度。",
          "スキルの獲得・強化、ポートフォリオの拡充としてご活用するだけでなく、他社員と関われる要素でもあり、先輩エンジニアの方々からのアドバイス等もいただけます。",
        ]}
      />
      <SystemBox
        title="福利厚生"
        body={[
          "「クエスト」で発生する納品インセンティブ、社員旅行や書籍紹介制度など。",
          "社員の声から生まれた制度も多々あり、今後もより良い環境構築のため、社内コミュニケーションを活性化し充実した福利厚生をご用意いたします。",
        ]}
      />
    </SystemBoxesWrapper>
  );
};

export default SystemBoxes;
