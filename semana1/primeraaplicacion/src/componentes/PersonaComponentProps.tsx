import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function PersonaComponentProps(props:Persona) {
  return (
    <div>
        <h1>Mostrar datos Personales</h1>
      <ul>
        <li>Nombre Persona{props.nombre}</li>
        <li>Apellido Persona{props.apellido}</li>
        <li>Edad Persona{props.edad}</li>
        <li>Correo{props.correo}</li>
        <li>Telefono{props.telefono
            
            }</li>
      </ul>
      
    </div>
  )
}
