import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const BookList = ({ books, onBookClick, onAddToCart }) => (
  <div className="book-list h-96 overflow-y-auto border rounded-lg p-4 bg-gray-100">
    <ul className="book-list__items space-y-4">
      {books.length > 0 ? (
        books.map((book) => (
          <li
            key={book.id}
            className="book-list__item flex items-center justify-between p-4 border rounded-lg shadow-md bg-white hover:bg-blue-50 cursor-pointer transition duration-200"
            onClick={() => onBookClick(book.id)}
          >
            <div className="book-list__details flex items-center gap-4">
              <div className="book-list__image w-16 h-16 bg-gray-200 rounded"></div>
              <div className="book-list__info">
                <h3 className="book-list__title text-lg font-semibold text-blue-700 group-hover:underline">
                  {book.title}
                </h3>
                <p className="book-list__author text-sm text-gray-600">Autor: {book.author}</p>
                <p className="book-list__genre text-sm text-gray-600">Género: {book.genre}</p>
              </div>
            </div>
            <button
              className="book-list__add-to-cart bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(book);
              }}
            >
              <FaShoppingCart size={16} />
            </button>
          </li>
        ))
      ) : (
        <p className="book-list__empty text-center text-gray-600">No se encontraron libros.</p>
      )}
    </ul>
  </div>
);

export default BookList;
