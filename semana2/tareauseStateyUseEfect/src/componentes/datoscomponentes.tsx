import React, { useState, useEffect } from 'react';
import { datos } from '../Modelos/datos';

interface datoscomponentesProps {
  Añadir: (Usuario: datos) => void;
}

export default function UserForm({ Añadir }: datoscomponentesProps) {
  const [Usuario, setUsuario] = useState<datos>({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    fechaNacimiento: '',
    edad: 0,
  });

  const años = (cumpleaños: string): number => {
    const dia = new Date();
    const fechaCumple = new Date(cumpleaños);
    let edad = dia.getFullYear() - fechaCumple.getFullYear();
    const meses = dia.getMonth() - fechaCumple.getMonth();
    if (meses < 0 || (meses === 0 && dia.getDate() < fechaCumple.getDate())) {
        edad--;
    }
    return edad;
  };

  useEffect(() => {
    if (Usuario.fechaNacimiento) {
      const age = años(Usuario.fechaNacimiento);
      setUsuario((a) => ({ ...a, edad: age }));
    }
  }, [Usuario.fechaNacimiento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((a) => ({ ...a, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Añadir(Usuario);
    setUsuario({
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fechaNacimiento: '',
      edad: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={Usuario.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="apellido" value={Usuario.apellido} onChange={handleChange} required />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" name="telefono" value={Usuario.telefono} onChange={handleChange} required />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" name="correo" value={Usuario.correo} onChange={handleChange} required />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input type="date" name="fechaNacimiento" value={Usuario.fechaNacimiento} onChange={handleChange} required />
      </div>
      <div>
        <label>Edad:</label>
        <input type="text" value={Usuario.edad} readOnly />
      </div>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
}