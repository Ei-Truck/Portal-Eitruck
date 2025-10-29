  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import Home from "../pages/Home/home";
  import Grafico from "../pages/Grafico1/grafico1";
  import Login from "../pages/Login/login";
  import Profile from "../pages/Perfil/profile";

  export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/perfil" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }