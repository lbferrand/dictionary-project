import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <div>
        <footer>
          This page was coded by
          <br />
          <a
            href="https://www.lbferrandportfolio.com"
            target="_blank"
            rel="noreferrer"
          >
            Luciana Bautista Ferrand
          </a>
          <br />
          Open sourced in{" "}
          <a
            href="https://github.com/lbferrand/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
