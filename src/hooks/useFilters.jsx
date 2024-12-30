import { useState } from 'react';

const useFilters = (books) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books || []);

  const filterBooks = () => {
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

  return {
    searchTerm,
    setSearchTerm,
    authorFilter,
    setAuthorFilter,
    genreFilter,
    setGenreFilter,
    filteredBooks,
    filterBooks,
  };
};

export default useFilters;
