import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import { Container } from './styles';

import { Button } from 'reactstrap';

function SignInPage() {
  const { SignIn } = useAuth();

  function handleLogin() {
    SignIn();
  }

  return (
    <Container>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
}

export default SignInPage;
