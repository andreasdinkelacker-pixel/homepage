import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Qualifikationen from "./page/qualifikationen/qualifikationen";
import Praxis from "./page/praxis/praxis";
import Yoga from "./page/yoga/yoga";
import Contact from "./page/contact/contact";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Praxis />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/qualifikationen" element={<Qualifikationen />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </>
  );
};

export default AppRouter;
