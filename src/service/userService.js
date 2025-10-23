import api from "./api";

async function login(user, password) {
  try {
    const response = await api.post("/login", {
      email: user,
      senha: password,
    });

    const data = response.data;

    sessionStorage.setItem("id", data.id);
    sessionStorage.setItem("token", data.token);

    return await findById(); 
  } catch (error) {
      console.error("Erro ao fazer login:", error);
      return null
  }
}

async function logout() {
  try{
    
  }catch(error){
    console.error("Erro ao fazer logout:", error)
    return null
  }
}

async function findById() {
  try {
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    if (!id || !token) {
      console.error("Usuário não logado ou token ausente");
      return null;
    }

    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Erro API:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Erro REQ_SERVER:\t:", error.request);
    } else {

      console.error("Erro AXIOS:\t", error.message);
    }
    return null;
  }
}

export { login, findById };
