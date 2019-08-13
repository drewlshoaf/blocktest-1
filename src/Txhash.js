import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      nextblock: "",
      tx: [],
      tx2: [],
      hash: "",
      show: false
    };
  }

  get = () => {
    axios
      .get(`https://blockchain.info/rawtx/${this.state.hash}?cors=true`)
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          show: true,
          tx: response.data.out,
          tx2: response.data.inputs
        });
      })
      .catch(error => {
        this.setState({
          data: {},
          tx: [],
          tx2: [],
          show: false
        });
      });
  };
  render() {
    return (
      <div className="App" style={{ width: "90%", margin: "0 auto" }}>
        <div style={{ margin: "5% 0%" }}>
          <div className="input-group mb-3">
            <input
              onChange={e => this.setState({ hash: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Enter TX Hash"
              aria-label="Enter TX Hash"
              aria-describedby="button-addon2"
            />
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
                  <h3>Raw TX</h3>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}>Block Height</span>
                    <span>{this.state.data.block_height}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Block Index</span>
                    <span>{this.state.data.block_index}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Double Spend</span>
                    <span>{this.state.data.double_spend}</span>
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
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Lock Time</span>
                    <span>{this.state.data.lock_time}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Relayed By</span>
                    <span>{JSON.stringify(this.state.data.relayed_by)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Size</span>
                    <span>{this.state.data.size}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}>Tx Index</span>
                    <span>{this.state.data.tx_index}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}>Ver</span>
                    <span>{this.state.data.ver}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Vin SZ</span>
                    <span>{this.state.data.vin_sz}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Vout SZ</span>
                    <span>{this.state.data.vout_sz}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Weight</span>
                    <span>{this.state.data.weight}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 col-sm-12">
                <div style={{ textAlign: "left" }}>
                  <h3>Out</h3>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Script</th>
                      <th scope="col">Addr</th>
                      <th scope="col">N</th>
                      <th scope="col">Spent</th>
                      <th scope="col">Type</th>
                      <th scope="col">TX Index</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  {this.state.tx.length > 0 ? (
                    <tbody>
                      {this.state.tx.map((val, ind) => {
                        return (
                          <tr key={ind}>
                            <th>
                              {val.script.slice(0, 4) +
                                "..." +
                                val.script.slice(
                                  val.script.length - 4,
                                  val.script.length
                                )}
                            </th>
                            <td>
                              {" "}
                              {val.addr.slice(0, 4) +
                                "..." +
                                val.addr.slice(
                                  val.addr.length - 4,
                                  val.addr.length
                                )}
                            </td>
                            <td>{val.n}</td>
                            <td>{JSON.stringify(val.spent)}</td>
                            <td>{val.type}</td>
                            <td>{val.tx_index}</td>
                            <td>{val.value}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    ""
                  )}
                </table>

                <div style={{ textAlign: "left" }}>
                  <h3>Inputs</h3>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Script</th>
                      <th scope="col">Sequence</th>
                      <th scope="col">Prv.Out Script</th>
                      <th scope="col">Prv.Out Addr</th>
                      <th scope="col">Prv.Out N</th>
                      <th scope="col">Prv.Out Spent</th>
                      <th scope="col">Prv.Out Type</th>
                      <th scope="col">Prv.Out TX Index</th>
                      <th scope="col">Prv.Out Value</th>
                    </tr>
                  </thead>
                  {this.state.tx2.length > 0 ? (
                    <tbody>
                      {this.state.tx2.map((val, ind) => {
                        return (
                          <tr key={ind}>
                            <th>
                              {val.script.slice(0, 4) +
                                "..." +
                                val.script.slice(
                                  val.script.length - 4,
                                  val.script.length
                                )}
                            </th>
                            <td>{val.sequence}</td>
                            <td>
                              {" "}
                              {val.prev_out.script.slice(0, 4) +
                                "..." +
                                val.prev_out.script.slice(
                                  val.prev_out.script.length - 4,
                                  val.prev_out.script.length
                                )}
                            </td>
                            <td>
                              {" "}
                              {val.prev_out.addr.slice(0, 4) +
                                "..." +
                                val.prev_out.addr.slice(
                                  val.prev_out.addr.length - 4,
                                  val.prev_out.addr.length
                                )}
                            </td>
                            <td>{val.prev_out.n}</td>
                            <td>{JSON.stringify(val.prev_out.spent)}</td>
                            <td>{val.prev_out.type}</td>
                            <td>{val.prev_out.tx_index}</td>
                            <td>{val.prev_out.value}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    ""
                  )}
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
