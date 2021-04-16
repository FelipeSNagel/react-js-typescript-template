import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Container } from './styles';

function SignIn() {
  const { SignIn } = useAuth();

  function handleLogin() {
    SignIn();
  }

  return (
    <Container>
      <button onClick={handleLogin}>Login</button>
    </Container>
  );
}

export default SignIn;
