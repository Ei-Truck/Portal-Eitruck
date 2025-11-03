  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import Home from "../pages/Home/home";
  import Grafico from "../pages/Grafico1/grafico1";
  import Login from "../pages/Login/login";
  import Profile from "../pages/Perfil/profile";
  import InserirVideo from "../pages/InserirVideo/inserir_video";
  import Graficos from "../pages/Graficos/Graficos";
import ListaVideos from "../pages/ListaVideos/lista_videos";

  export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/perfil" element={<Profile/>}></Route>
          <Route path="/inserir-video" element={<InserirVideo/>}></Route>
          <Route path="/listar-videos" element={<ListaVideos/>}></Route>
          <Route path="/teste" element={<Graficos/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }