import React from "react";

function Stock({company, handleStockBuy, isPortFolioStock, setBuyStock, buyStock}) {
  
  const handleClick = () => {
    if (!handleStockBuy) {
      console.log('delete')
      setBuyStock((prev) => {
        return (prev.filter(stock => stock !== company))
      })
      return 
    }else {
      if ( buyStock.includes(company)){
        alert('You already have this stock, please choose a differnt stock to add to your portfolio')
      }else {
      handleStockBuy(company)
    }}
  }

  return (
    <div>
      <div className="card" onClick={() => { handleClick()}}>
        <div className="card-body" >
          <h5 className="card-title">{company.name}</h5>
          <p className="card-text">{company.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
