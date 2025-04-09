import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
// import BackgroundParticles from "./components/backgroundParticles"; // TODO背景
import Header from "./components/header";
import MainVisual from "./components/mainVisual";
import WithAI from "./components/withAi";
import Support from "./components/support";
import Learn from "./components/learn";
import Data from "./components/data";
import Flow from "./components/flow";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainVisual />
      <WithAI />
      <Support />
      <Learn />
      <Data />
      <Flow />
      <Footer />
    </Router>
  );
};

export default App;
