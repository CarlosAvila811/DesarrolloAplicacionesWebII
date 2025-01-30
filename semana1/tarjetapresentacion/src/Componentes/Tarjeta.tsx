
import { Persona } from '../Modelos/Persona'

export default function Tarjeta(props:Persona) {
  return (
    <div>
      
      <ul>
            <h2>Nombre{props.nombre}</h2>
            <li>Ocupacion:{props.ocupacion}</li>
            <li>Pais:{props.pais}</li>
      </ul>
    </div>
  )
}
