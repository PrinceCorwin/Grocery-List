import React, { useRef, useState } from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <>
      <section className='card'>
        <h2 className='header'>Log In</h2>
        {error && <alert>{error}</alert>}
        <form onSubmit={handleSubmit}>
          <div id='email'>
            <label>Email</label>
            <input type='email' ref={emailRef} required />
          </div>
          <div id='password'>
            <label>Password</label>
            <input type='password' ref={passwordRef} required />
          </div>
          <button disabled={loading} className='logInOut' type='submit'>
            Log In
          </button>
        </form>
        <div>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </section>
      <div>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  );
}
