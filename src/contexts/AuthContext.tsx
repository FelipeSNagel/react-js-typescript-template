import React, { createContext, useState, useContext, useEffect } from 'react';

import api from 'services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  SignIn(): Promise<void>;
  SignOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function SignIn() {
    const response = await api.post('/login', {
      email: 'example@email.com',
      password: '123456',
    });

    //response from api
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);
  }

  function SignOut() {
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('App:token');
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, SignIn, SignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
