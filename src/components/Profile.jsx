import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return (
      <div className="user-profile user-profile--empty flex items-center justify-center min-h-screen">
        <p className="user-profile__message text-xl text-gray-600">
          No hay información de usuario disponible.
        </p>
      </div>
    );
  }

  return (
    <div className="user-profile p-10 bg-white shadow-lg rounded-lg">
      <div className="user-profile__header text-center mb-6">
        <h1 className="user-profile__title text-4xl font-bold text-blue-800 mb-4">
          Perfil de Usuario
        </h1>
      </div>

      <div className="user-profile__details text-left mb-6">
        <p className="user-profile__detail text-lg text-gray-600">
          <strong>Nombre:</strong> {user.name}
        </p>
        <p className="user-profile__detail text-lg text-gray-600">
          <strong>Correo electrónico:</strong> {user.email}
        </p>
      </div>

      <div className="user-profile__books mb-8">
        <h2 className="user-profile__books-title text-2xl font-semibold text-gray-800 mb-4">
          Libros Comprados:
        </h2>
        {user.books && user.books.length > 0 ? (
          <ul className="user-profile__books-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.books.map((book) => (
              <li
                key={book.id}
                className="user-profile__book-item p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <p className="user-profile__book-title font-semibold text-lg text-gray-800">
                  {book.title}
                </p>
                <p className="user-profile__book-author text-sm text-gray-600">
                  {book.author}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="user-profile__no-books text-gray-600">
            No has comprado libros aún.
          </p>
        )}
      </div>

      <div className="user-profile__actions flex justify-center">
        <button className="user-profile__edit-btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
