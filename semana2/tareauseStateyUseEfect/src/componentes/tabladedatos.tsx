import { datos } from '../Modelos/datos';

interface TablaDatosProps {
    usuario: datos[];
  eliminarUsuario: (index: number) => void;
}

export default function tabla({ usuario, eliminarUsuario }: TablaDatosProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuario.map((usuario, index) => (
          <tr key={index}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.fechaNacimiento}</td>
            <td>{usuario.edad}</td>
            <td>
              <button onClick={() => eliminarUsuario(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
