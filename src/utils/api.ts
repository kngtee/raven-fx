export const fetchTradingPairs = async (coinId: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/tickers`
    );
    const data = await response.json();
    return data.tickers;
  } catch (error) {
    console.error("Error fetching trading pairs:", error);
    return [];
  }
};

export const fetchOHLCData = async (
  coinId: string,
  vsCurrency = "usd",
  days = 1
) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=${vsCurrency}&days=${days}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching OHLC data:", error);
    return [];
  }
};
