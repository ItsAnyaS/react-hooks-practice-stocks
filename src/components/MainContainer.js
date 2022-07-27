import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [companies, setCompanies] = useState([])
  const [buyStock, setBuyStock] = useState([])
  const [filter, setFilter] = useState('')
  const getCompanies = async () => {
    let req = await fetch("http://localhost:3001/stocks");
    let res = await req.json()
    setCompanies(res)
  }

  useEffect(()=> {
    getCompanies()
  }, [])

  const handleStockBuy = (stock) => {
    setBuyStock((prev) => {
      const newStocks = [...prev, stock]
      return newStocks
    });
  };
  return (
    <div>
      <SearchBar setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            companies={companies}
            handleStockBuy={handleStockBuy}
            setBuyStock={setBuyStock}
            buyStock={buyStock}
            filter={filter}
            setFilter={setFilter}
            setCompanies={setCompanies}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer buyStock={buyStock} setBuyStock={setBuyStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
