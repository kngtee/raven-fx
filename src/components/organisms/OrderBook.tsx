/* eslint-disable @typescript-eslint/no-explicit-any */
interface OrderBookProps {
  tickers: any[];
  coinId: string;
}

const OrderBook = ({ tickers, coinId }: OrderBookProps) => {
  return (
    <div className="order-book">
      <h2 className="order-book__title">Order Book - {coinId}</h2>
      <ul className="order-book__list">
        {tickers?.slice(0, 10).map((ticker, idx) => (
          <li className="order-book__item" key={idx}>
            {ticker.last} | {ticker.volume}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook;
