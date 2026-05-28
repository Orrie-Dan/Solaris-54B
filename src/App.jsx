import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Group from "./pages/Group";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import NotFound from "./pages/NotFound";
import SolutionDetail from "./pages/SolutionDetail";
import Solutions from "./pages/Solutions";
import SSIT from "./pages/SSIT";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
        <Route path="/ssit" element={<SSIT />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/group" element={<Group />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
