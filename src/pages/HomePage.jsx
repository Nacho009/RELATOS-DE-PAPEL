import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../data/books';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import BookList from '../components/BookList';
import { CartContext } from '../hooks/useCart';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books || []);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    let filtered = books;

    if (searchTerm) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (authorFilter) {
      filtered = filtered.filter((book) => book.author === authorFilter);
    }

    if (genreFilter) {
      filtered = filtered.filter((book) => book.genre === genreFilter);
    }

    setFilteredBooks(filtered);
  };

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="home-page p-6">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <Filters
        books={books}
        authorFilter={authorFilter}
        setAuthorFilter={setAuthorFilter}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />
      <BookList
        books={filteredBooks}
        onBookClick={handleBookClick}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default HomePage;
