import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CoinForm from "./components/CoinForm";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinType, setCoinType] = useState('Bitcoin');
  const getCoinType = (data) =>{
    setCoinType(data)
    console.log(data)
  }
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <CoinForm getCoinType={getCoinType} />
      <Charts coinData={coinData} coinType={coinType} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
