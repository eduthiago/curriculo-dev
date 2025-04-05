import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1>Eduardo Thiago</h1>
      <h2>Desenvolvedor Front-End</h2>

      <p>
        Sou um desenvolvedor iniciante apaixonado por tecnologia, buscando minha
        primeira oportunidade na área. Estudando React, JavaScript, e outras
        ferramentas modernas para desenvolvimento web.
      </p>

      <h3>Redes Sociais</h3>
      <ul>
        <li>
          <a
            href="https://github.com/eduthiago"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:eduthiago@gmail.com">E-mail</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
