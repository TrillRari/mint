import react from 'react';





<div className="App">
    <>
     <NavBar />
     </>    
    <div className="header">
    <img src={logo} alt="img" />
    </div>
       
      <div className="container">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        
        <div className="wallet__flex">
          <div className="walletG">
            <h3>Mint a HAPE</h3>
            <button onClick={transfer}>MINT</button>
          </div>
        </div>
      </div>
    </div>