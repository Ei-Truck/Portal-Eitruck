import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "../ListaVideos/lista_videos_style.css";
import { useEffect, useState } from "react";
import { getMidiaConcatenada } from "../../service/midiaConcatenada";
export default function ListaVideos() {
  const [videos, setVideos] = useState([])
  useEffect(() =>{
    async function fetchVideos() {
      const data = await getMidiaConcatenada();
      if (data){
        setVideos(data)
      }
    }
    fetchVideos();
  })
  return (
    <>
      <Navbar />

      <div className="page-container">
        <Sidebar />

        <section className="table-container">
  <div className="table-scroll">
    <table>
      <thead>
        <tr>
          <th>URL Vídeo Concatenado</th>
          <th>Viagem</th>
          <th>Motorista</th>
          <th>Segmento</th>
          <th>Gravidade</th>
        </tr>
      </thead>
      <tbody>
        {videos.map((v, i) => (
          <tr key={i}>
            <td>{v?.url}</td>
            <td>{v?.viagem?.id}</td>
            <td>Motorista</td>
            <td>Segmento</td>
            <td>Gravidade</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      </div>
    </>
  );
}
