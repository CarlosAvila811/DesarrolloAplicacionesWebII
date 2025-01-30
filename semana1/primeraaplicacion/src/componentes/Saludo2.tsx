import React from 'react'

export default function Saludo2(props) {
  
    var nombre: string ='carlos';
    function suma(a:number,b:number) {

        return a+b;
    }

    return (
    <div>
      suma del componente {suma(4,4)}
      <p>El nombre recibido como propiedad es: {props.nombre}</p>
    </div>
  )
}
