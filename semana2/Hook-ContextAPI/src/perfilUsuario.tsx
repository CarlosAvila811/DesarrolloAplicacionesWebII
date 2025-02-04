import  { useContext } from 'react';
import { AuthContext } from './context';

export default function UsuarioPerfil() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>AuthContext no disponible.</div>;
  }

  const { autentica, usuario, login, logout } = authContext;

  return (
    <div>
      {autentica ? (
        <div>
          <p> {usuario}!</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <button onClick={() => login('Hola Mundo')}>Iniciar Sesión</button>
      )}
    </div>
  );
}