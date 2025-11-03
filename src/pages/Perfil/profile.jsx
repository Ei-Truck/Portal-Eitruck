import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "../Perfil/profile_style.css";
import { useEffect, useState } from "react";
import { findById } from "../../service/userService";
import { getSegmentos } from "../../service/segmentoService";
import { getCargos } from "../../service/cargoService";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [segmentos, setSegmentos] = useState([]);
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const id = sessionStorage.getItem("id");
      if (!id) return;

      const data = await findById(id);
      if (data) {
        setUser(data);
      }
    }

    async function fetchSegmentos() {
      const data = await getSegmentos();
      if (data) {
        setSegmentos(data);
      }
    }

    async function fetchCargos() {
      const data = await getCargos();
      if (data) {
        setCargos(data);
      }
    }

    fetchCargos();
    fetchUser();
    fetchSegmentos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-layout">
        <div className="">
          <Sidebar />
        </div>

        <div id="general-profile-info">
          {/* Card do Cabeçalho com Foto e Botão Sair */}
          <div id="profile-photo">
            <div id="profile-image-name">
              <img 
                src={user?.urlFoto} 
                alt={user?.nomeCompleto || "Foto de perfil"} 
              />
              <div id="name-position">
                <h3>{user?.nomeCompleto || "Carregando..."}</h3>
                <p>
                  {user?.cargo?.nome && user?.unidade?.segmento?.nome
                    ? `${user.cargo.nome} - ${user.unidade.segmento.nome}`
                    : "Carregando informações..."}
                </p>
              </div>
            </div>
            <button type="button">Sair</button>
          </div>

          {/* Seção de Informações e Console */}
          <div id="profile-info">
            {/* Card de Informações do Usuário */}
            <div id="infos">
              <div id="since">
                <h3>Desde: {user?.dtContratacao || "N/A"}</h3>
              </div>

              <form id="infos-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  defaultValue={user?.nomeCompleto}
                  key={user?.nomeCompleto} // Force re-render quando user mudar
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  key={user?.email}
                />

                <div id="separator">
                  <div className="separator-div">
                    <label htmlFor="cargo">Cargo</label>
                    <select
                      name="cargo"
                      id="cargo"
                      defaultValue={user?.cargo?.id}
                      key={user?.cargo?.id}
                    >
                      <option value="">Selecione um cargo</option>
                      {cargos.map((cargo) => (
                        <option key={cargo.id} value={cargo.id}>
                          {cargo.nome}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="separator-div">
                    <label htmlFor="segmento">Segmento</label>
                    <select
                      name="segmento"
                      id="segmento"
                      defaultValue={user?.unidade?.segmento?.id}
                      key={user?.unidade?.segmento?.id}
                    >
                      <option value="">Selecione um segmento</option>
                      {segmentos.map((seg) => (
                        <option key={seg.id} value={seg.id}>
                          {seg.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit">Alterar Perfil</button>
              </form>
            </div>

            {/* Console de Transações */}
            <div id="transaction-console">
              <h1>Console de transações</h1>
              <div>
                <div className="transaction-div">
                  {/* Dados mockados ou componente de listagem aqui */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}