import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Overlay from './Overlay';
import './login.css';

function Login({ form }) {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const location = useLocation();

  // Verify what url was selected
  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsRightPanelActive(true); // If url /signup was select, this one is activate
    } else {
      setIsRightPanelActive(false); // if url selected was /login, sign in form is activate
    }
  }, [location.pathname]); // Update when the path change

  const handleSignUpClick = () => {
    setIsRightPanelActive(true); // Verify if the painel is on the right side 
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false); // Verify if the painel is on the right side 
  };

  return (
    <div className='main'>
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        
      {isRightPanelActive ? <SignUpForm /> : <SignInForm />}

        {/* Overlay (panel to alternate between forms) */}
        <Overlay
          onSignInClick={handleSignInClick}
          onSignUpClick={handleSignUpClick}
        />
      </div>
    </div>
  );
};

export default Login;