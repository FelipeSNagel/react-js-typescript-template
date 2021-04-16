import React from 'react';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
