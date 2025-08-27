import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}