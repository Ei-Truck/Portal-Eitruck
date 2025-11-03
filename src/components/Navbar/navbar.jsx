import "../Navbar/navbar.css";
import logo_eitruck from "../../assets/logo_eitruck.svg";
import icone_perfil from "../../assets/icone_perfil.svg";
import { useEffect, useState } from "react";
import { findById } from "../../service/userService";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const id = sessionStorage.getItem("id");
      if (!id) return;
      const data = await findById();
      if (data) {
        setUser(data);
      }
    }

    fetchUser();
  }, []);

  return (
    <nav>
      <div id="first-section" className="division">
        <img src={logo_eitruck} id="logo" alt="Logo EiTruck" />
      </div>

      <Link id="second-section"className="division" to="/perfil">
        <img src={icone_perfil} id="icone_perfil" alt="Ícone de perfil" />
        <h3>{user?.nomeCompleto || "Usuário"}</h3>
      </Link>
    </nav>
  );
}
