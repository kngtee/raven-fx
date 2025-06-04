import { formatNumber } from "../../utils/formatNumber";

interface Ticker {
  base: string;
  target: string;
  market: {
    name: string;
  };
  last: number;
  volume: number;
  trade_url: string;
}

interface OrderBookProps {
  tickers: Ticker[];
  coinId: string;
}

const OrderBook = ({ tickers, coinId }: OrderBookProps) => {
  return (
    <div className="order-book">
      <h2 className="order-book__title">Order Book - {coinId.toUpperCase()}</h2>
      <div className="order-book__list">
        {tickers.slice(0, 10).map((ticker, index) => (
          <div key={index} className="order-book__item">
            <span className="order-book__pair">
              {ticker.base}/{ticker.target}
            </span>
            <span className="order-book__price">
              ${formatNumber(ticker.last)}
            </span>
            <span className="order-book__volume">
              Vol: {formatNumber(ticker.volume)}
            </span>
            <a
              href={ticker.trade_url}
              target="_blank"
              rel="noopener noreferrer"
              className="order-book__link"
            >
              Trade on {ticker.market.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
