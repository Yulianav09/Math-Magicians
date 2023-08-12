import { useState, useEffect } from 'react';

const apiKey = 'MjFx93DKQY9OcA2CcwGaFg==97fQaXcDcvJR7aL3';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

const Quote = () => {
  const [data, setData] = useState({ quote: 'this is a quote', author: null });

  const getQuote = async () => {
    setData({ quote: 'Loading...', author: null });
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
      });
      const responseJson = await response.json();
      setData(responseJson[0]);
    } catch (error) {
      setData({ quote: 'Error fetching the Quote from API', author: null });
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quoteContainer">
      <div className="quote">{data.quote}</div>
      <div className="author">{data.author}</div>
    </div>
  );
};

export default Quote;
