import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "../Graficos/graficos_style.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { getRelatorioSemanal } from "../../service/viewsService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardGraficos() {
  const [dadosSemana, setDadosSemana] = useState([]);

  useEffect(() => {
    async function fetchDadosSemana() {
      const data = await getRelatorioSemanal();
      if (data) setDadosSemana(data);
    }
    fetchDadosSemana();
  }, []);

  const barData = {
    labels: dadosSemana.map((d) => d.diasemana),
    datasets: [
      {
        label: "Total de Infrações",
        data: dadosSemana.map((d) => d.total_infracoes),
        backgroundColor: "#FF6B6B",
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Infrações por Dia da Semana", font: { size: 18 } },
    },
  };

  const dadosTipos = [
    { tipo_infracao: "Excesso de velocidade", total_ocorrencias: 10, porcentagem_do_total: 50 },
    { tipo_infracao: "Estacionamento irregular", total_ocorrencias: 6, porcentagem_do_total: 30 },
    { tipo_infracao: "Avanço de sinal", total_ocorrencias: 4, porcentagem_do_total: 20 },
  ];

  const doughnutData = {
    labels: dadosTipos.map((t) => t.tipo_infracao),
    datasets: [
      {
        label: "% do total",
        data: dadosTipos.map((t) => t.porcentagem_do_total),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Distribuição por Tipo de Infração", font: { size: 18 } },
    },
  };

  return (
   <>
  <Navbar />
  <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
    <main className="charts-container" style={{ flex: 1, padding: "40px" }}>
      <div className="chart-box">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="chart-box">
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
    </main>
  </div>
</>

  );
}
