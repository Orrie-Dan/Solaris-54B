import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { fadeInOut, pageTransition } from "./components/motion";
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
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const routeMotion = reduceMotion ? fadeInOut : pageTransition;

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          className="page-transition"
          initial={routeMotion.initial}
          animate={routeMotion.animate}
          exit={routeMotion.exit}
        >
          <Routes location={location}>
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
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
