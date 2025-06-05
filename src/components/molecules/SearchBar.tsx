import { useMemo, useState } from "react";
import Input from "../atoms/Input";
import debounce from "lodash/debounce";
import { useCoinStore } from "../../hook/useCoinState";

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Coin[]>([]);
  const setCoinId = useCoinStore((state) => state.setCoinId);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const last = localStorage.getItem("lastSearchedCoin");
  //   if (last) {
  //     setSearchTerm(last);
  //     onChange(last);
  //   }
  // }, []);

  const fetchCoins = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query) return;
        setLoading(true);
        try {
          const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
          );
          const coins: Coin[] = await res.json();
          const filtered = coins.filter((coin) =>
            coin.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log(filtered);
          setSuggestions(filtered.slice(0, 10));
        } catch (err) {
          console.error("Failed to fetch coins", err);
        } finally {
          setLoading(false);
        }
      }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchCoins(value);
  };

  // Select coin from suggestions
  const handleSelect = (coinName: string) => {
    setSearchTerm(coinName);
    setCoinId(coinName);
    setSuggestions([]);
    onChange(coinName);
  };

  return (
    <div className="search-bar">
      <Input
        className="search-bar__input"
        placeholder="Search pairs..."
        onChange={handleChange}
        value={searchTerm}
      />

      {loading && <div className="search-bar__spinner">🔄</div>}
      {!!suggestions.length && (
        <ul className="search-bar__suggestions">
          {suggestions.map((coin) => (
            <li
              key={coin.id}
              className="search-bar__suggestion"
              onClick={() => handleSelect(coin.name)}
            >
              {coin.name.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
