import {api} from "./api";

export async function getSegmentos() {
  try {
    const response = await api.get("/segmentos")
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