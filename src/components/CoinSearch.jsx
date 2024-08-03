import { useState, useEffect } from 'react';
import CoinItem from './CoinItem';

// The CoinSearch component
function CoinSearch({ coins }) {
  // State to store the search input text
  const [searchText, setSearchText] = useState('');
  // State to handle loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    // Set loading to true when data fetching starts
    setIsLoading(true);

    // Simulate a network request with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulate a 2-second delay

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);

  // Filtered coins based on searchText
  const filteredCoins = coins.filter((coin) => {
    if (searchText === '') {
      return true; // Return all coins if searchText is empty
    }
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className='rounded-div my-4'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <p className='text-xl'>Browse Coins</p>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state on input change
            type="text"
            placeholder='Search for a coin'
            className="p-2 border rounded bg-slate-700 font-medium text-white outline-none"
          />
        </form>
      </div>

      {/* Table displaying the list of coins */}
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th></th>
            <th className='px-4'>#</th> {/* Column for coin rank */}
            <th className='text-left'>Coin</th> {/* Column for coin name */}
            <th></th>
            <th>Price</th> {/* Column for coin price */}
            <th>24h</th> {/* Column for 24h change */}
            <th className='hidden md:table-cell'>24h Volume</th> {/* Column for 24h volume (hidden on small screens) */}
            <th className='hidden sm:table-cell'>Mkt</th> {/* Column for market cap (hidden on very small screens) */}
            <th>Last 7 Days</th> {/* Column for price trend over the last 7 days */}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="9" className="text-center py-4">
                <p>Loading...</p> {/* Display loading message */}
              </td>
            </tr>
          ) : filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => (
              // Render a CoinItem component for each filtered coin
              <CoinItem key={coin.id} coin={coin} />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-4">
                <p>No coins match the search criteria</p> {/* Display no data message */}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CoinSearch; // Export the CoinSearch component for use in other parts of the application
