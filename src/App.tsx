import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import HomePage from "./pages/home";
import ScrollToTop from "./components/common/scrollToTop";
import CustomCursor from "./components/common/customCursor";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
