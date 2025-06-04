import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface OrderFormProps {
  symbol: string;
}

const OrderForm = ({ symbol }: OrderFormProps) => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const total = price * amount;
  return (
    <div className="order-form">
      <h2 className="order-form__title">Buy {symbol.toUpperCase()}</h2>
      <Input
        className="order-form__input"
        type="number"
        placeholder="Limit price"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Input
        className="order-form__input"
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="order-form__total">Total: {total.toFixed(2)}</div>
      <Button className="order-form__button order-form__button--buy">
        Buy {symbol.toUpperCase()}
      </Button>
    </div>
  );
};

export default OrderForm;
