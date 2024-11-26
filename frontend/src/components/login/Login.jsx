import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Overlay from './Overlay';
import './login.css';

function Login({ form }) {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const isSignUpForm = form === 'signup';
  const navigate = useNavigate();
  const location = useLocation();

  // Verifica a URL e ajusta o estado do painel com base nela
  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsRightPanelActive(true); // Se a URL for '/signup', o painel estará ativo
    } else {
      setIsRightPanelActive(false); // Se for '/login', o painel estará na tela de login
    }
  }, [location.pathname]); // Vai atualizar sempre que o caminho mudar

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='main'>
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        
      {isRightPanelActive ? <SignUpForm /> : <SignInForm />}

        {/* Overlay (painel para alternar entre Login e Cadastro) */}
        <Overlay
          onSignInClick={handleSignInClick}
          onSignUpClick={handleSignUpClick}
        />
      </div>
    </div>
  );
};

export default Login;