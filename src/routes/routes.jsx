import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/home";
import Grafico from "../pages/Grafico1/grafico1";
import Login from "../pages/Login/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/teste" element={<Grafico/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}