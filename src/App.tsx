import "./styles/main.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import XchangePage from "./components/pages/XchangePage";
import { AuthPage } from "./components/pages/AuthPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<XchangePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
