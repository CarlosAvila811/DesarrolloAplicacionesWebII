import React, { createContext, useState } from 'react';

interface AuthContextType {
    autentica: boolean;
  usuario: string | null;
  login: (nombreusuario: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [autentica, setautentica] = useState(false);
  const [usuario, setusuario] = useState<string | null>(null);

  const login = (nombreusuario: string) => {
    setautentica(true);
    setusuario(nombreusuario);
  };

  const logout = () => {
    setautentica(false);
    setusuario(null);
  };

  return (
    <AuthContext.Provider value={{ autentica, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}