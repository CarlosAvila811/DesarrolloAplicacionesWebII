import { useState } from 'react'
import Tabladedatos from './componentes/tabladedatos'
import Datoscomponentes  from './componentes/datoscomponentes';
import {datos} from './Modelos/datos';
import './App.css'

export default function App() {
  const [formulario, setformulario] = useState(false);
  const [usuario, setusuario] = useState<datos[]>([]);

  const añadir = (u: datos) => {
    setusuario([u]);
  };

  const eliminar = (index: number) => {
    const nuevousuario = usuario.filter((_, i) => i !== index);
    setusuario(nuevousuario);
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <button onClick={() => setformulario(!formulario)}>
        {formulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      {formulario && <Datoscomponentes Añadir={añadir} />}
      <Tabladedatos usuario={usuario} eliminarUsuario={eliminar} />
    </div>
  );
}


