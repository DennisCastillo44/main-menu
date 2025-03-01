import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Airlines from "@components/organisms/Airlines";
import Airports from "@components/organisms/Airports";
import MainLayout from "../components/templates/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="airlines" element={<Airlines />} />
          <Route path="airports" element={<Airports />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
