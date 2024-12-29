import React from 'react';

const Filters = ({
  books,
  authorFilter,
  setAuthorFilter,
  genreFilter,
  setGenreFilter,
}) => (
  <div className="filters flex gap-4 mb-6">
    <select
      value={authorFilter}
      onChange={(e) => setAuthorFilter(e.target.value)}
      className="filters__author-select p-3 border rounded-lg w-1/3"
    >
      <option value="">Todos los autores</option>
      {Array.from(new Set(books.map((book) => book.author))).map((author) => (
        <option key={author} value={author} className="filters__author-option">
          {author}
        </option>
      ))}
    </select>
    <select
      value={genreFilter}
      onChange={(e) => setGenreFilter(e.target.value)}
      className="filters__genre-select p-3 border rounded-lg w-1/3"
    >
      <option value="">Todos los géneros</option>
      {Array.from(new Set(books.map((book) => book.genre))).map((genre) => (
        <option key={genre} value={genre} className="filters__genre-option">
          {genre}
        </option>
      ))}
    </select>
  </div>
);

export default Filters;
