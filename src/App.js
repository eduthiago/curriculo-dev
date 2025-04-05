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
      <h1>Eduardo Monteiro</h1>
      <h2>Cientista de Dados</h2>

      <p>
        Apaixoando por estatística, machine learning e ciência de dados. Sou um
        cientista de dados em construção com experiência em Python, R, SQL ,
        Power BI e Tableau. Estou sempre buscando novos desafios e me tornar um
        profissional melhor. Sou um eterno aprendiz e busco sempre me atualizar
        com as novas tendências e tecnologias do mercado.
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
