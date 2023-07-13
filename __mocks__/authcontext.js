import { createContext } from 'react';

export const AuthContext = createContext({
  user: null,
  login: jest.fn(),
  logout: jest.fn(),

});