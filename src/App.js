import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Video Player Demo</p>
        <div>
          <input
            className="form-control"
            style={{ marginBottom: 20 }}
            type="text"
            placeholder="Input Video URL"
          />
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            controls={true}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
