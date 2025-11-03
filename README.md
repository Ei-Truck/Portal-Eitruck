# Portal EiTruck

Bem‑vindo ao **Portal EiTruck** — uma aplicação web front‑end desenvolvida com Create React App e destinada ao portal de usuários/gestores da Ei‑Truck.

## 📝 Visão Geral

Este projeto tem como objetivo disponibilizar uma interface web que permita:

* visualização e gestão de dados de transporte/logística para a Ei‑Truck;
* interface responsiva para usuários finais e gestores;
* integração futura com APIs back‑end para autenticação, dados de frota, histórico de viagens, dashboards etc.

## 🚀 Tecnologias Utilizadas
Tecnologia	Função
React	Framework front-end
JavaScript / ES6+	Lógica e estrutura do portal
HTML5 / CSS3	Estrutura e estilo das páginas
npm	Gerenciador de pacotes
Create React App	Estrutura inicial do projeto e scripts prontos

## 🏎️ Como Rodar o Projeto (em Desenvolvimento)

No terminal, na pasta do projeto, execute:

```bash
# instalar dependências
npm install

# iniciar servidor de desenvolvimento
npm start
```

Depois de `npm start`, abra no navegador: [http://localhost:3000](http://localhost:3000)
A página irá recarregar quando você fizer alterações.

### Outros comandos úteis

* `npm test` — executa os testes (se houver)
* `npm run build` — gera a versão de produção na pasta `build`, minificada, otimizada
* `npm run eject` — **atenção**: operação irreversível que expõe toda configuração (webpack, etc) caso você queira customizar profundamente

## 📁 Estrutura do Projeto

Portal-Eitruck/
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── node_modules/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── navbar.css
│   │   │   └── navbar.jsx
│   │   │
│   │   └── Sidebar/
│   │       ├── sidebar.css
│   │       └── sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Grafico1/
│   │   │   └── grafico1.js
│   │   │
│   │   ├── Graficos/
│   │   │   ├── graficos.style.css
│   │   │   └── Graficos.jsx
│   │   │
│   │   ├── Home/
│   │   │   ├── home.style.css
│   │   │   └── home.jsx
│   │   │
│   │   ├── InserirVideo/
│   │   │   ├── inserir_video.style.css
│   │   │   └── inserir_video.jsx
│   │   │
│   │   ├── ListaVideos/
│   │   │   ├── lista_videos.style.css
│   │   │   └── lista_videos.jsx
│   │   │
│   │   ├── Login/
│   │   │   ├── login.style.css
│   │   │   └── login.jsx
│   │   │
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


## 📄 Licença

Este projeto está licenciado sob a **MIT License** — consulte o arquivo `LICENSE` para mais detalhes.

## 🧑‍💻 Autores

* DanieTogSevero — Desenvolvimento inicial
* Contribuição do projeto Ei Truck!!
