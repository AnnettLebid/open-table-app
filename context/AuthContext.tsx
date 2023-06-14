"use client";

import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

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

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [authState, setAuthState] = useState<AuthState>({
    loading: false,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }

      const response = await axios.get("http://localhost:3000/api/auth/user", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("response", response);

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const AuthContext = () => useContext(AuthenticationContext);
