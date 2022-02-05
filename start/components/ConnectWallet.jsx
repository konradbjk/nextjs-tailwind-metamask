import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useState } from "react";

// https://stackoverflow.com/a/65378580
import "regenerator-runtime/runtime";

const InstallMetamask = () => (
  <div className="text-red-500 font-medium">
    Please install{" "}
    <a href="https://metamask.io/download/" className="hover:uderline">
      MetaMask Wallet
    </a>
  </div>
);

const ConnectingMetamask = () => (
  <div className="text-orange-500 font medium">
    Connecting to your Metamask Wallet
  </div>
);

const ConnectedMetamask = () => (
  <div className="text-green-500 font medium">Metamask Connected</div>
);

export default function ConnectWallet() {
  const { connectWallet, address, chainId, error } = useWeb3();
  const [loginState, setLoginState] = useState();
  const [buttonVisible, setButtonVisible] = useState(true);

  const login = async () => {
    setButtonVisible(false);
    setLoginState(ConnectingMetamask);
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      setLoginState(InstallMetamask);
      return;
    }
    connectWallet("injected");
  };

  if(error) return <h1>{error}</h1>

  return (
    <div className="">
      {address ? (
        <section>
          <h3 className="font-medium text-3xl">Status</h3>
          <ConnectedMetamask/>
          <div className="grid grid-rows-2">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="info-text alert alert-primary">
                Address: {address} <span id="network"></span>
              </p>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="info-text alert alert-secondary">
                ChainId: {chainId}
                <span id="chainId"></span>
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div>
          {buttonVisible && (
            <button
              className="rounded-md px-5 py-2 bg-orange-500 font-medium text-white"
              onClick={login}
            >
              Connect Wallet
            </button>
          )}
          <p>{loginState}</p>
        </div>
      )}
    </div>
  );
}
