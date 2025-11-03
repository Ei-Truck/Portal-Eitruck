# 🚛 Portal EiTruck

Bem-vindo ao **Portal EiTruck** — uma aplicação web front-end desenvolvida com **React** (via Create React App), voltada para o **portal de usuários e gestores da Ei-Truck**.

---

## 📝 Visão Geral

O projeto tem como objetivo disponibilizar uma **interface web moderna e responsiva** que permita:

* Visualização e gestão de dados de transporte e logística;
* Acesso otimizado para usuários finais e gestores;
* Integração futura com **APIs back-end** para autenticação, dados de frota, histórico de viagens, dashboards, entre outros.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia            | Função                                 |
| --------------------- | -------------------------------------- |
| **React**             | Framework front-end principal          |
| **JavaScript (ES6+)** | Lógica e estrutura do portal           |
| **HTML5 / CSS3**      | Estrutura e estilo das páginas         |
| **npm**               | Gerenciador de pacotes                 |
| **Create React App**  | Estrutura inicial e scripts do projeto |

---

## 🏎️ Como Rodar o Projeto (Ambiente de Desenvolvimento)

No terminal, dentro da pasta do projeto:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

Após iniciar, abra o navegador em:
👉 [http://localhost:3000](http://localhost:3000)

A aplicação recarrega automaticamente ao salvar alterações.

---

## 🧰 Outros Comandos Úteis

```bash
# Executa testes (se houver)
npm test

# Gera versão de produção (minificada/otimizada)
npm run build

# Exibe configurações internas (irreversível)
npm run eject
```

---

## 📁 Estrutura do Projeto

```
Portal-Eitruck/
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── navbar.css
│   │   │   └── navbar.jsx
│   │   └── Sidebar/
│   │       ├── sidebar.css
│   │       └── sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Grafico1/
│   │   │   └── grafico1.js
│   │   ├── Graficos/
│   │   │   ├── graficos.style.css
│   │   │   └── Graficos.jsx
│   │   ├── Home/
│   │   │   ├── home.style.css
│   │   │   └── home.jsx
│   │   ├── InserirVideo/
│   │   │   ├── inserir_video.style.css
│   │   │   └── inserir_video.jsx
│   │   ├── ListaVideos/
│   │   │   ├── lista_videos.style.css
│   │   │   └── lista_videos.jsx
│   │   ├── Login/
│   │   │   ├── login.style.css
│   │   │   └── login.jsx
│   │   └── Perfil/
│   │       ├── profile.style.css
│   │       └── profile.jsx
│   │
│   └── routes/
│       └── routes.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — consulte o arquivo `LICENSE` para mais detalhes.

---

## 🧑‍💻 Autores

* **DanielTogSevero** — Desenvolvimento inicial
* Contribuição da equipe **Ei-Truck**


