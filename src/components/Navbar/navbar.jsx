import "../Navbar/navbar.css";
import logo_eitruck from "../../assets/logo_eitruck.svg";
import icone_perfil from "../../assets/icone_perfil.svg";
import { useEffect, useState } from "react";
import { findById } from "../../service/userService";

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

      <div id="second-section" className="division">
        <img src={icone_perfil} id="icone_perfil" alt="Ícone de perfil" />
        <h3>{user?.nomeCompleto || "Usuário"}</h3>
      </div>
    </nav>
  );
}
