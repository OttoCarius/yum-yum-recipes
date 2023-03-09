import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Cuisine from "../pages/cuisine/Cuisine";
import Searched from "../pages/searched/Searched";
import Recipe from "../pages/recipe/Recipe";
import Layout from "../components/layout/Layout";

function RoutesPage() {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
    </>
  );
}

export default RoutesPage;
