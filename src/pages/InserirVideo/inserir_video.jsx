  import "../InserirVideo/inserir_video_style.css"
  import Navbar from "../../components/Navbar/navbar"
  import Sidebar from "../../components/Sidebar/sidebar"
  import { useEffect, useState } from "react";
  import { getMotoristas } from "../../service/motoristaService";
  import { getInfracao } from "../../service/infracaoService";
  import { uploadMidia, concatMidia } from "../../service/midiaConcatenada";

  function VideoInput({ num_video, onFileChange }) {
      return (
          <div className="form-input">
              <h3>Video <span>{num_video}</span></h3>
              <input type="file" onChange={onFileChange}/>
          </div>
      )
  }

  export default function InserirVideo() {
      const [inputs, setInputs] = useState([{ id: Date.now(), file: null }]);
      const [motoristas, setMotorista] = useState([]);
      const [infracoes, setInfracoes] = useState([]);
      const [motoristaSelecionado, setMotoristaSelecionado] = useState("");
      const [infracaoSelecionada, setInfracaoSelecionada] = useState("");
      const [videoLinks, setVideoLinks] = useState([]);

      useEffect(() => {
          async function fetchMotoristas() {
              const data = await getMotoristas();
              if (data) setMotorista(data);
          }
          async function fetchInfracoes() {
              const data = await getInfracao();
              if (data) setInfracoes(data);
          }
          fetchMotoristas();
          fetchInfracoes();
      }, []);

      const adicionarInput = () => {
          setInputs([...inputs, { id: Date.now(), file: null }]);
      };

      const handleFileChange = (index, event) => {
          const newInputs = [...inputs];
          newInputs[index].file = event.target.files[0];
          setInputs(newInputs);
      };
      const novosLinks = [];
    const handleEnviar = async () => {
    if (!motoristaSelecionado || !infracaoSelecionada) {
      alert("Selecione motorista e infração");
      return;
    }

    
    for (let i = 0; i < inputs.length; i++) {
      const file = inputs[i].file;
      if (!file) continue;
      try {
        const response = await uploadMidia(motoristaSelecionado, file);
        const linkVideo = response?.url || null;

        if (linkVideo) {
          novosLinks.push(linkVideo);
          console.log(`Vídeo ${i + 1} enviado com sucesso! Link:`, linkVideo);
        } else {
          console.warn(`Vídeo ${i + 1} enviado, mas sem link retornado.`);
        }

      } catch (error) {
        console.error("Erro ao enviar vídeo", i + 1, error);
      }
    }

    if (novosLinks.length > 0) {
      setVideoLinks((prev) => [...prev, ...novosLinks]);
    }

    alert("Todos os vídeos enviados!");


    if (novosLinks.length > 0) {
      try {
        const respostaConcat = await concatMidia(motoristaSelecionado, novosLinks);
        console.log("Resultado da concatenação:", respostaConcat);

        if (respostaConcat?.output_url) {
          alert("Vídeos concatenados com sucesso!");
          console.log("URL do vídeo final:", respostaConcat.output_url);
        } else {
          alert("Concatenação concluída, mas sem URL de saída retornada.");
        }
      } catch (error) {
        alert("Erro ao concatenar vídeos");
        console.error(error);
      }
    }
  };


      return (
          <>
          <Navbar/>
          <section id="body">
              <div><Sidebar/></div>
              <div id="page-form">
                  <div id="header">
                      <h2 id="path">Inserir vídeos</h2>
                      <button className="button">Listar todos</button>
                  </div>
                  <div id="all-forms">
                      <div id="forms">
                          <div id="inputs">
                            <label>
                              <h4>Motorista</h4>
                              <select 
                                  value={motoristaSelecionado} 
                                  onChange={(e) => setMotoristaSelecionado(e.target.value)}
                              >
                                  <option value="">Selecione</option>
                                  {motoristas.map((mot) => 
                                      <option key={mot?.id} value={mot.id}>
                                          {mot?.nomeCompleto}
                                      </option>
                                  )}
                              </select>
                            </label>
                            <label>
                              <h4>Infração</h4>
                              <select
                                  value={infracaoSelecionada}
                                  onChange={(e) => setInfracaoSelecionada(e.target.value)}
                              >
                                  <option value="">Selecione uma infração</option>
                                  {infracoes.map((i) => (
                                      <option key={i.id} value={i.id}>
                                          {i.id}
                                      </option>
                                  ))}
                              </select>
                            </label>
                          </div>
                          <div id="file-inputs">
                              {inputs.map((input, idx) => (
                                  <VideoInput 
                                      key={input.id} 
                                      num_video={idx + 1} 
                                      onFileChange={(e) => handleFileChange(idx, e)} 
                                  />
                              ))}
                          </div>
                      </div>
                      <button className="button" onClick={handleEnviar}>Enviar</button>

                      <button className="button" onClick={adicionarInput}>Adicionar Vídeo</button>
                  </div>
              </div>
          </section>
          </>
      )
  }
