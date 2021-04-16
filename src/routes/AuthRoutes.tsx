import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AuthSignIn from 'pages/Auth/SignIn';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={AuthSignIn} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
