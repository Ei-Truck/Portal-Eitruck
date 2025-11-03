import {api, api_concat} from "./api";

export async function getMidiaConcatenada() {
  try {
    const response = await api.get("/midias-concatenadas")
    return response.data;
  }catch (error) {
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


export async function getMidiasInfracao() {
  try {
    const response = await api.get("/midias-infracoes");
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
export async function uploadMidia(motoristaId, file){
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("motoristaId", motoristaId);

    const response = await api.post(
      "/midias-infracoes/inserir-midia",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar mídia:", error);
    throw error;
  }
};
export async function concatMidia(idMotorista, midias) {
  try {
    const body = { videos: midias, 
      nome: "teste.mp4"
    };

    const response = await api_concat.post("/concatenar", body, {
      params: { id_motorista: idMotorista }
    });

    console.log("Concatenação concluída:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao concatenar mídia:", error);
    if (error.response) {
      console.error("Erro API:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Erro REQ_SERVER:", error.request);
    } else {
      console.error("Erro AXIOS:", error.message);
    }
    throw error;
  }
};

