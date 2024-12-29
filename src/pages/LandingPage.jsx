import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
      <h1 className="landing-page__title text-4xl font-bold mb-4">Bienvenido a Relatos de Papel</h1>
      <p className="landing-page__message text-lg">Serás redirigido a la página principal en 5 segundos...</p>
    </div>
  );
};

export default LandingPage;
