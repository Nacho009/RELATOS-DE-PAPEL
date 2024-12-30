import React, {useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../data/books';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import BookList from '../components/BookList';
import { CartContext } from '../context/CartContext';
import useFilters from '../hooks/useFilters';

const HomePage = () => {
  const { 
    searchTerm, setSearchTerm,
    authorFilter, setAuthorFilter,
    genreFilter, setGenreFilter,
    filteredBooks, filterBooks 
  } = useFilters(books);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="home-page p-6">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={filterBooks}
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
