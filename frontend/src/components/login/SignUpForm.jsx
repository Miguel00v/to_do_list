import React from 'react';

function SignUpForm() {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1 className='titleForms'>Sign Up</h1>
        <span>Register a username, password, and provide your email</span>
        <input type="userName" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="confirmPassword" placeholder="Confirm your password" required />
        <button type='submit'><p>Sign Up</p></button>
      </form>
    </div>
  );
}

export default SignUpForm;