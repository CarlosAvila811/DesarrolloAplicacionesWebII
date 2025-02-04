
import AuthProvider from './context';
import UsuarioPerfil from './perfilUsuario';
import './App.css'

function App() {
 

  return (
    <AuthProvider>
      <div className="App">
        <h1>Sistema de Autenticación</h1>
        <UsuarioPerfil></UsuarioPerfil>
      </div>
    </AuthProvider>
  )
}

export default App
