import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import UserPage from './pages/UserPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './styles/HomePage.css';
import books from './data/books';
import NotificationBanner from './components/NotificationBanner';


function App() {

  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Router>
        {isBannerVisible && (
        <NotificationBanner
          message="¡Bienvenido a Relatos de Papel!"
          onClose={handleBannerClose}
        />
        )}          
      <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/book/:id" element={<BookPage books={books} />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/profile" element={<UserPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
