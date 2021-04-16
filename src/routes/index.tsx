import React, { useContext } from 'react';

import AuthRoutes from './AuthRoutes';
import OtherRoutes from './OtherRoutes';

import { useAuth } from 'contexts/AuthContext';

function Routes() {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <AuthRoutes />;
}

export default Routes;
