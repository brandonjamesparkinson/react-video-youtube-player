import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      url: "",
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (data) => {
    data.preventDefault();
    this.setState({ url: this.state.inputValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React Video Player Demo</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
                type="text"
                placeholder="Input Video URL"
              />
              <button className="btn btn-primary" style={{ marginBottom: 20 }}>
                Play Video
              </button>
            </form>
          </div>
          <div>
            <ReactPlayer url={this.state.url} controls={true} />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
