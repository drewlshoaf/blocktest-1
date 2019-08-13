import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      tx: [],
      tx2: [],
      datalength: 0,
      show: false
    };
  }

  get = () => {
    axios
      .get(`https://blockchain.info/latestblock?cors=true`)
      .then(response => {
        this.setState({
          data: response.data,
          tx: response.data.txIndexes,
          tx2:
            response.data.txIndexes.length > 10
              ? response.data.txIndexes.slice(0, 10)
              : response.data.txIndexes,
          datalength:
            response.data.txIndexes.length > 10
              ? 10
              : response.data.txIndexes.length,
          show: true
        });
      })
      .catch(error => {
        this.setState({
          data: {},
          tx: [],
          tx2: [],
          datalength: 0,
          show: false
        });
      });
  };
  render() {
    return (
      <div className="App" style={{ width: "90%", margin: "0 auto" }}>
        <div style={{ margin: "5% 0%" }}>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <button
                onClick={() => {
                  this.get();
                }}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Get Details
              </button>
            </div>{" "}
          </div>

          {this.state.show ? (
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div style={{ textAlign: "left" }}>
                  <h3>Latest Block</h3>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}>Block Index</span>
                    <span>{this.state.data.block_index}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Height</span>
                    <span>{this.state.data.height}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Time</span>
                    <span>{this.state.data.time}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Hash</span>
                    {this.state.data.hash !== undefined ? (
                      <span>
                        {this.state.data.hash.slice(0, 4)}...
                        {this.state.data.hash.slice(
                          this.state.data.hash.length - 4,
                          this.state.data.hash.length
                        )}
                      </span>
                    ) : (
                      <span />
                    )}
                  </li>
                </ul>
              </div>
              <div className="col-md-8 col-sm-12">
                <div style={{ textAlign: "left" }}>
                  <h3>TX Indexes</h3>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">TX Indexes</th>
                    </tr>
                  </thead>
                  {this.state.tx2.length > 0 ? (
                    <tbody>
                      {this.state.tx2.map((val, ind) => {
                        return (
                          <tr key={ind}>
                            <td>{ind}</td>
                            <td>{val}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    ""
                  )}
                  <div className="input-group-append">
                    <button
                      onClick={() => {
                        this.setState({
                          tx2: this.state.tx.slice(
                            0,
                            this.state.datalength + 10
                          ),
                          datalength: this.state.datalength + 10
                        });
                      }}
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Load More
                    </button>
                  </div>
                </table>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
