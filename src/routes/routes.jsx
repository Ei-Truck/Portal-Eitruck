import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/home";
import Grafico from "../pages/Grafico1/grafico1";
import Login from "../pages/Login/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Grafico/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}