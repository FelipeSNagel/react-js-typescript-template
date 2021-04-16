import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';

function Home() {
  const { SignOut } = useAuth();

  function handleLogout() {
    SignOut();
  }

  return (
    <Container>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}

export default Home;
