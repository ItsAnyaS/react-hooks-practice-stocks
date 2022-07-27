import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({buyStock, setBuyStock}) {
  const [isPortfolioStock] = useState(true)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        buyStock.map(stock => {
          return (<Stock company={stock} key={stock.id} isPortfolioStock={isPortfolioStock} setBuyStock={setBuyStock}/>)
        })
      }
    </div>
  );
}

export default PortfolioContainer;
