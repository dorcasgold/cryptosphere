import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    // Fetch trending coins from the API
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      setIsLoading(false); // Set loading to false once data is fetched
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Filtered coins based on searchText
  const filteredCoins = trending.filter((coin) => {
    if (searchText === '') {
      return true; // Return all coins if searchText is empty
    }
    return coin.item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className='rounded-div my-12 py-8 text-primary'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state on input change
            type="text"
            placeholder='Search for a trending coin'
            className="p-2 border rounded bg-slate-700 font-medium text-white outline-none"
          />
        </form>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {isLoading ? (
          <div className="text-center py-4">
            <p>Loading...</p> {/* Display loading message */}
          </div>
        ) : filteredCoins.length > 0 ? (
          filteredCoins.map((coin, idx) => (
            <div key={idx} className='rounded-div-c flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                  <img
                    className='mr-4 rounded-full'
                    src={coin.item.small}
                    alt={coin.item.name}
                  />
                  <div>
                    <p className='font-bold'>{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img
                    className='w-4 mr-2'
                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                    alt='BTC'
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">
            <p>No coins match the search criteria</p> {/* Display no data message */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
