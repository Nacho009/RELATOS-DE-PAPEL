import React from 'react';
import UserProfile from '../components/Profile';

const UserData = {
  name: 'Ignacio Ramos López',
  email: 'ignacio.ramos716@comunidadunir.net',
  books: [
    { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
    { id: 2, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
  ],
};

const UserPage = () => {
  return (
    <div className="user-page p-6">
      <UserProfile user={UserData} />
    </div>
  );
};

export default UserPage;
