export default function Contracts() {
    return (
        <section>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
            <div className="card full-width">
              <div className="card-body">
                <h4 className="card-title">Contract</h4>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="deployButton" disabled>Deploy Contract</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="depositButton" disabled>Deposit</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="withdrawButton" disabled>Withdraw</button>
                <p className="info-text alert alert-secondary">Contract Status: <span id="contractStatus">Not clicked</span></p>
              </div>
            </div>
          </div>  
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
            <div className="card full-width">
              <div className="card-body">
                <h4 className="card-title">Send Eth</h4>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="sendButton" disabled>Send</button>
                <p className="info-text alert alert-info">Contract Status: <span id="contractStatus">Not clicked</span></p>
                <hr />
                <h4>Sign Typed Data</h4>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="signTypedData" disabled>Sign</button>
                <p className="info-text alert alert-warning">Sign Typed Data Result: <span id="signTypedDataResult"></span></p>
              </div>
            </div>
          </div>
  
          <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
            <div className="card full-width">
              <div className="card-body">
                <h4 className="card-title">Send Tokens</h4>
                <p className="info-text alert alert-success">Token: <span id="tokenAddress"></span></p>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="createToken" disabled>Create Token</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokens" disabled>Transfer Tokens</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokens" disabled>Approve Tokens</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokensWithoutGas" disabled>Transfer Tokens
                  Without Gas</button>
                <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokensWithoutGas" disabled>Approve Tokens
                  Without Gas</button>
                <p className="info-text alert alert-info">Contract Status: <span id="contractStatus">Not clicked</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}