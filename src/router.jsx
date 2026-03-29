import { Routes, Route } from "react-router-dom";
import Qualifikationen from "./page/qualifikationen/qualifikationen";
import Praxis from "./page/praxis/praxis";
import Yoga from "./page/yoga/yoga";
import Contact from "./page/contact/contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Praxis />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/qualifikationen" element={<Qualifikationen />} />
      <Route path="/kontakt" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
