import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container app-main">
        <h1>Weather App</h1>
        <Search />
      </div>
      <footer>
        <a
          href="https://github.com/victory220/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Viktoriia Rudnytska
      </footer>
    </div>
  );
}
