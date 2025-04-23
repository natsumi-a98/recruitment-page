import { useRef, useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import media from "../../styles/mediaQuery";

const listData = [
  {
    title: "キャリア例",
    content: [
      "PM / PMO",
      "プログラマ",
      "テストエンジニア",
      "ディレクター",
      "デザイナー",
    ],
  },
  {
    title: "案件例",
    content: [
      "車載システム開発",
      "金融システム開発",
      "iOS/Androidアプリ開発・テスト",
      "アノテーション",
      "航空機管制システム開発",
      "インフラ運用保守",
      "Javaパッケージ開発",
      "React/TypeScript開発",
      "ゼロトラスト開発",
      "クラウド構築",
      "ソフトウェア評価",
      "AI開発支援",
    ],
  },
  {
    title: "フロントエンド",
    content: [
      "基本技術: HTML, CSS, JavaScript, TypeScript",
      "フレームワーク・ライブラリ: React, Vue.js, Angular, Svelte, Next.js, Nuxt.js",
      "状態管理: Redux, Zustand, Recoil",
      "スタイリング: Tailwind CSS",
    ],
  },
  {
    title: "バックエンド",
    content: [
      "JavaScript/TypeScript: Node.js (Express.js, NestJS, Koa)",
      "Java: Spring Boot, Jakarta EE",
      "Python: Django, Flask, FastAPI",
      "Ruby: Ruby on Rails",
      "PHP: Laravel, Symfony, WordPress",
      "C#: .NET",
      "Go: Go",
      "データベース: MySQL, PostgreSQL, MongoDB, SQLite",
    ],
  },
  {
    title: "インフラ・クラウド",
    content: [
      "クラウド: AWS, Azure, Google Cloud Platform (GCP)",
      "コンテナ・オーケストレーション: Docker, Kubernetes",
      "OS: Linux",
    ],
  },
  {
    title: "モバイル開発",
    content: [
      "クロスプラットフォーム: Flutter (Dart), React Native",
      "iOS: Swift",
      "Android: Kotlin",
    ],
  },
  {
    title: "ツール・その他",
    content: [
      "バージョン管理: Git (GitHub, GitLab, Bitbucket)",
      "デザイン・UI/UX: Adobe Creative Suite (Photoshop, Illustrator), Figma",
      "エディタ・IDE: VS Code, Cursor",
      "API技術: GraphQL, REST API, WebRTC, WebAssembly",
      "その他: SEO, UI/UX, アジャイル開発, セキュリティ",
    ],
  },
];

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 69px;
  border-bottom: 3px solid #0e0e0e;
`;

const Title = styled.span`
  font-size: 24px;

  ${media.mobile`
    font-size: 20px;
  `}
`;

const CareerExamples = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "maxHeight" && prop !== "isOpen"
})<{ maxHeight: string; isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.5s ease, opacity 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "10px 0 10px 20px" : "0 0 0 20px")};
  white-space: pre-line;
`;

const CareerExampleItems = styled.div`
  margin-bottom: 8px;
`;

const AfterTrainingContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;

  ${media.mobile`
    width: 100%;
  `}
`;

const AfterTraining = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h6>経験者・研修後のキャリアイメージ</h6>
      <AfterTrainingContainer>
        <Container>
          {listData.map((item, index) => {
            const isOpen = openIndex === index;

            // ref を登録（戻り値は void に）
            const setRef = (el: HTMLDivElement | null): void => {
              contentRefs.current[index] = el;
            };

            // scrollHeight から maxHeight を取得
            const maxHeight = isOpen
              ? `${contentRefs.current[index]?.scrollHeight || 0}px`
              : "0px";

            return (
              <div key={index}>
                <ListHeader onClick={() => handleToggle(index)}>
                  <Title>{item.title}</Title>
                  <KeyboardArrowDownIcon
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                </ListHeader>

                <CareerExamples
                  ref={setRef}
                  isOpen={isOpen}
                  maxHeight={maxHeight}
                >
                  {item.content.map((text, i) => (
                    <CareerExampleItems key={i}>{text}</CareerExampleItems>
                  ))}
                </CareerExamples>
              </div>
            );
          })}
        </Container>
      </AfterTrainingContainer>
    </>
  );
};

export default AfterTraining;
