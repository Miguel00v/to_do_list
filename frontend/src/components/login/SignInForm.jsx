import React from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1 className='titleForms'>Sign in</h1>
        <input type="userName" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" required />
        <Link className='loginLink' to="/resetPassword" title="Reset your password">
          Forgot your password?
        </Link>
        <button type='submit'><p>Sign In</p></button>
      </form>
    </div>
  );
}

export default SignInForm;