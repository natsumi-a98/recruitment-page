import { useEffect, useState } from "react";
import MainVisual from "../components/parts/mainVisual";
import WithAISection from "../components/parts/withAi";
import SupportSection from "../components/parts/support";
import LearnSection from "../components/parts/learn";
import DataSection from "../components/parts/data";
import FlowSection from "../components/parts/flow";
import Header from "../components/parts/header";
import Footer from "../components/parts/footer";
import Modal, { ModalKey } from "../components/common/modal";

const HomePage = () => {
  // モーダルの状態
  const [modal, setModal] = useState<ModalKey | null>(null);

  // モーダル表示中は背景スクロールを無効化
  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden"; // html 要素のスクロールを無効化
      document.body.style.overflow = "hidden"; // body 要素のスクロールを無効化
    } else {
      document.documentElement.style.overflow = "auto"; // html 要素のスクロールを有効化
      document.body.style.overflow = "auto"; // body 要素のスクロールを有効化
    }

    // クリーンアップ処理
    return () => {
      document.documentElement.style.overflow = "auto"; // モーダルが閉じられたときに戻す
      document.body.style.overflow = "auto"; // モーダルが閉じられたときに戻す
    };
  }, [modal]);

  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <WithAISection />
        <SupportSection onViewMoreClick={() => setModal("support")} />
        <LearnSection onViewMoreClick={() => setModal("learn")} />
        <DataSection />
        <FlowSection />
      </main>
      <Footer />

      {modal && <Modal modal={modal} onClose={() => setModal(null)} />}
    </>
  );
};

export default HomePage;
