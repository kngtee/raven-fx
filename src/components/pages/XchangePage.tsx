/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import OrderBook from "../organisms/OrderBook";
import OrderForm from "../organisms/OrderForm";
import TradingChart from "../organisms/TradingChart";
import XchangeLayout from "../templates/XchangeLayout";
import { fetchOHLCData, fetchTradingPairs } from "../../utils/api";

const XchangePage = () => {
  const [coinId, setCoinId] = useState("bitcoin");
  const [tickers, setTickers] = useState([]);
  const [ohlcData, setOhlcData] = useState([]);

  useEffect(() => {
    fetchTradingPairs(coinId).then(setTickers);
    fetchOHLCData(coinId, "usd", 1).then(setOhlcData);
  }, [coinId]);
  return (
    <XchangeLayout>
      <div className="xchange-page__main">
        <section className="xchange-page__chart">
          <TradingChart data={ohlcData} />
        </section>
        <aside className="xchange-page__side">
          <OrderBook tickers={tickers} coinId={coinId} />
          <OrderForm symbol={coinId} />
        </aside>
      </div>
    </XchangeLayout>
  );
};

export default XchangePage;
