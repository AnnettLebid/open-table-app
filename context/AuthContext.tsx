"use client";

import { useState, createContext, ReactNode, useContext } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

interface AuthState {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthContextProps extends AuthState {
  setAuthState: React.Dispatch<AuthState>;
}

export const AuthenticationContext = createContext<AuthContextProps>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const AuthContext = () => useContext(AuthenticationContext);
