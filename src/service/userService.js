
export default async function login(user, password) {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user,     // nome do campo precisa bater com o DTO
        senha: password
      })
    });
    
    if (!response.ok) {
      throw new Error("Erro ao fazer login");
    }
    else{
        return true
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
