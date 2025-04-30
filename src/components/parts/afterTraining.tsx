import {
  AccordionGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/joy";
import styled from "styled-components";
import media from "../../styles/mediaQuery";
import { useState } from "react";

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

const AfterTrainingContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  ${media.tablet`
    width: 100%;
  `}
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  font-size: 20px;
  ${media.tablet`
    font-size: 16px;
  `}
`;

const AfterTraining = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <h6>経験者・研修後のキャリアイメージ</h6>
      <AfterTrainingContainer>
        <AccordionGroup variant="plain">
          {listData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
            >
              <StyledAccordionSummary>{item.title}</StyledAccordionSummary>
              <AccordionDetails>
                <Box>
                  {item.content.map((text, i) => (
                    <Typography key={i} sx={{ mb: 1, ml: 4 }}>
                      {text}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </AfterTrainingContainer>
    </>
  );
};

export default AfterTraining;
