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
      hash: "",
      show: false
    };
  }

  get = () => {
    axios
      .get(`https://blockchain.info/rawblock/${this.state.hash}?cors=true`)
      .then(response => {
        this.setState({
          data: response.data,
          nextblock:
            response.data.next_block[0].slice(0, 4) +
            "..." +
            response.data.next_block[0].slice(
              response.data.next_block[0].length - 4,
              response.data.next_block[0].length
            ),
          tx: response.data.tx,
          show: true
        });
      })
      .catch(error => {
        this.setState({
          data: {},
          nextblock: "",
          tx: [],
          hash: "",
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
              placeholder="Enter Raw Hash"
              aria-label="Enter Raw Hash"
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
                  <h3>Raw Block</h3>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}>Bits</span>
                    <span>{this.state.data.bits}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Block Index</span>
                    <span>{this.state.data.block_index}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Fee</span>
                    <span>{this.state.data.fee}</span>
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
                    <span style={{ fontWeight: "bold" }}> Height</span>
                    <span>{this.state.data.height}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Main Chain</span>
                    <span>{JSON.stringify(this.state.data.main_chain)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> MRKL Root</span>
                    {this.state.data.mrkl_root !== undefined ? (
                      <span>
                        {this.state.data.mrkl_root.slice(0, 4)}...
                        {this.state.data.mrkl_root.slice(
                          this.state.data.mrkl_root.length - 4,
                          this.state.data.mrkl_root.length
                        )}
                      </span>
                    ) : (
                      <span />
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> N TX</span>
                    <span>{this.state.data.n_tx}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Next Block</span>
                    <span>{this.state.nextblock}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Data Nonce</span>
                    <span>{this.state.data.nonce}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Previous Block</span>
                    {this.state.data.prev_block !== undefined ? (
                      <span>
                        {this.state.data.prev_block.slice(0, 4)}...
                        {this.state.data.prev_block.slice(
                          this.state.data.prev_block.length - 4,
                          this.state.data.prev_block.length
                        )}
                      </span>
                    ) : (
                      <span />
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Received Time</span>
                    <span>{this.state.data.received_time}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Relayed By</span>
                    <span>{this.state.data.relayed_by}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Size</span>
                    <span>{this.state.data.size}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Time</span>
                    <span>{this.state.data.time}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: "bold" }}> Ver</span>
                    <span>{this.state.data.ver}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 col-sm-12">
                <div style={{ textAlign: "left" }}>
                  <h3>TX</h3>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr><th scope="col">Hash</th>
                      <th scope="col">Lock Time</th>
                      <th scope="col">Relayed By</th>
                      <th scope="col">Size</th>
                      <th scope="col">Time</th>
                      <th scope="col">TX Index</th>
                      <th scope="col">Ver</th>
                      <th scope="col">Vin SZ</th>
                      <th scope="col">Vout SZ</th>
                      <th scope="col">Weight</th></tr>
                  </thead>
                  {this.state.tx.length > 0 ? (
                    <tbody>
                      {this.state.tx.map((val, ind) => {
                        return (
                          <tr key={ind}><th>
                              {val.hash.slice(0, 4) +
                                "..." +
                                val.hash.slice(
                                  val.hash.length - 4,
                                  val.hash.length
                                )}
                            </th>
                            <td>{val.lock_time}</td>
                            <td>{val.relayed_by}</td>
                            <td>{val.size}</td>
                            <td>{val.time}</td>
                            <td>{val.tx_index}</td>
                            <td>{val.ver}</td>
                            <td>{val.vin_sz}</td>
                            <td>{val.vout_sz}</td>
                            <td>{val.weight}</td></tr>
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
