import React from "react";
import logo from '../assets/icone_perfil.png';
import Button from '../components/buttons/Buttons';

function Home(){
    return (
      < >
        <main className="AppHome">
          <img src={logo} className="logo" alt="Logo" />
          <h1 className='titles'>Welcome!</h1>
          <h3 className='titles'>Plan your day, achieve your goals.</h3>
          <Button link="/login" label="Sign-in" />
          <Button link="/signup" label="Sign Up" />
        </main>
      </ >
    );
  }

export default Home;