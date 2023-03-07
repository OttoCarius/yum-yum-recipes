import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Cuisine from "../pages/cuisine/Cuisine";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default RoutesPage;
