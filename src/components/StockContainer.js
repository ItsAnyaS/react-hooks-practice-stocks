import React from "react";
import Stock from "./Stock";


function StockContainer({ companies, handleStockBuy, setBuyStock, buyStock, filter, setCompanies }) {
  const handleRender = () => {
    if (!filter){
      return companies;
    } else if (filter === "Alphabetically") {
    let alph = companies.sort((a, b) => a.name.localeCompare(b.name))
      return alph
    }else if (filter === 'Price'){
      let pr = companies.sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, {'numeric': true}))
      return pr
    }else if (filter === 'Tech'){
      let tech = companies.filter(company => company.type === 'Tech')
      return tech
    }else if (filter === 'Sportswear'){
      let sports = companies.filter((company) => company.type === "Sportswear");
        return sports
    } else if (filter === 'Finance'){
        let finance = companies.filter((company) => company.type === "Finance");
        return finance;
    }else {
      return
    }
  }
  return (
    <div>
      <h2>Stocks</h2>
      {handleRender().map((company) => {
        return (
          <Stock
            company={company}
            key={company.id}
            handleStockBuy={handleStockBuy}
            setBuyStock={setBuyStock}
            buyStock={buyStock}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;
