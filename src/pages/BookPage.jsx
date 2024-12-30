import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaUserCircle } from 'react-icons/fa';
import reviews from '../data/usersReviews';
import { CartContext } from '../context/CartContext';

const BookPage = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!book) {
    return <p className="book-page__not-found text-center text-gray-500">Libro no encontrado.</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="book-page__star text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="book-page__star book-page__star--empty text-gray-400" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="book-page p-6 max-w-5xl mx-auto">
      <div className="book-page__main flex gap-6 mb-8">
        <div className="book-page__image-container w-1/3">
          <img src={book.image} alt={book.title} className="book-page__image w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="book-page__details w-2/3">
          <h1 className="book-page__title text-2xl font-bold mb-4">{book.title}</h1>
          <p className="book-page__author text-lg text-gray-600 mb-2">Autor: {book.author}</p>
          <p className="book-page__genre text-lg text-gray-600 mb-4">Género: {book.genre}</p>
          <p className="book-page__synopsis text-sm text-gray-700 mb-6 border border-gray-300 p-4 rounded-lg bg-gray-100">
            {book.synopsis}
          </p>
          <button
            className="book-page__add-to-cart bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(book);
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>

      <div className="book-page__reviews">
        <h2 className="book-page__reviews-title text-xl font-bold mb-4">Comentarios y reseñas</h2>
        <div className="book-page__reviews-list h-64 overflow-y-auto border rounded-lg p-4 bg-gray-100">
          {reviews.map((review) => (
            <div key={review.id} className="book-page__review flex items-start gap-4 mb-4">
              <FaUserCircle size={36} className="book-page__review-icon text-gray-400" />
              <div>
                <h3 className="book-page__review-username text-md font-semibold">{review.username}</h3>
                <div className="book-page__review-stars flex items-center mb-2">{renderStars(review.rating)}</div>
                <p className="book-page__review-comment text-sm text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
