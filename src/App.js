import React from "react";
import "./App.css";
import Block from "./Block";
import Txhash from "./Txhash";
import LatestBlock from "./LatestBlock";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      nextblock: "",
      tx: [],
      hash: "",
      show: false
    };
  }
  componentDidMount() {
    // this.get();
  }

  render() {
    return (
      <div className="App" style={{ width: "90%", margin: "0 auto" }}>
        <div style={{ margin: "5% 0%", textAlign: 'left' }}>
          <h4>Blockchain.info API's</h4>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
            Raw Block
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
            TX Block
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Latest Block
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Block />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Txhash />
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <LatestBlock />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
