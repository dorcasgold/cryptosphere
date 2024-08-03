import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import CoinPage from './pages/CoinPage';

function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true'

  useEffect(() => {
    axios.get(url).then(response => {
      setCoins(response.data);
    })
  }, [url]);
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coin/:coinId' element={<CoinPage />}>
          <Route path=':coinId' />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App