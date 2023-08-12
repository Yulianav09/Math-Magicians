import { useState, useEffect } from 'react';

const apiKey = 'MjFx93DKQY9OcA2CcwGaFg==97fQaXcDcvJR7aL3';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

const Quote = () => {
  const [data, setData] = useState({ quote: null, author: null });
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
      });
      const responseJson = await response.json();
      setData(responseJson[0]);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quoteContainer">
      {isLoading && <div>Loading...</div>}
      {hasError && <div>Error fetching the quote from the API</div>}
      <div className="quote">{data.quote}</div>
      <div className="author">{data.author}</div>
    </div>
  );
};

export default Quote;
