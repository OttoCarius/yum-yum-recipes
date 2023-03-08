import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Cuisine from "../pages/cuisine/Cuisine";
import Searched from "../pages/searched/Searched";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default RoutesPage;
