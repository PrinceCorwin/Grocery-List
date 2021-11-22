import React, { useRef, useState } from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <>
      <section className='card'>
        <h2 className='header'>Password Reset</h2>
        {error && <alert variant='danger'>{error}</alert>}
        {message && <alert variant='success'>{message}</alert>}
        <form onSubmit={handleSubmit}>
          <div id='email'>
            <label>Email</label>
            <input type='email' ref={emailRef} required />
          </div>
          <button className='resetPass' disabled={loading} type='submit'>
            Reset Password
          </button>
        </form>
        <div>
          <Link to='/login'>Login</Link>
        </div>
      </section>

      <div>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  );
}
