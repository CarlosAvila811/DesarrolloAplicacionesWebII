import React from 'react'

export default function PersonaComponent({nombre,apellido,edad,correo,telefono}) {
  /**
   * nombre
   * apellido
   * Edad
   * Correo
   * Telefono
   */
  return (
    <div>
      <h1>Mostrar datos Personales</h1>
      <ul>
        <li>Nombre Persona{nombre}</li>
        <li>Apellido Persona{apellido}</li>
        <li>Edad Persona{edad}</li>
        <li>Correo{correo}</li>
        <li>Telefono{telefono}</li>
      </ul>
    </div>
  )
}
