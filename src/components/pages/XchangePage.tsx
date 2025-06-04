/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import OrderBook from "../organisms/OrderBook";
import OrderForm from "../organisms/OrderForm";
import TradingChart from "../organisms/TradingChart";
import XchangeLayout from "../templates/XchangeLayout";
import { fetchOHLCData, fetchTradingPairs } from "../../utils/api";
import type { OHLCData } from "../../types/candle";

const XchangePage = () => {
  const [coinId, setCoinId] = useState("bitcoin");
  const [tickers, setTickers] = useState([]);
  const [ohlcData, setOhlcData] = useState<OHLCData[]>([]);

  useEffect(() => {
    fetchTradingPairs(coinId).then(setTickers);
    fetchOHLCData(coinId, "usd", 1).then((data) => {
      const formattedData: OHLCData[] = data.map((item: number[]) => ({
        timestamp: item[0],
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
      }));
      setOhlcData(formattedData);
    });
  }, [coinId]);
  return (
    <XchangeLayout>
      <div className="xchange-page__main">
        <section className="xchange-page__chart">
          <h1 className="xchange-page__title">
            Trading Chart - {coinId.toUpperCase()}
          </h1>
          <p className="xchange-page__description">
            Search a coin to view its trading chart.
          </p>
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
