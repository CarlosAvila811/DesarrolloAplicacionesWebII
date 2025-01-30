import React from 'react'

export default function saludo() {

    var nombre='Carlos'
    function cambiarNombrePorEdad(){
      nombre-3;
      return nombre;
    }
  function suma(a,b){
    return a+b;
  }
  return (
    <div>
      <p> este es un saludo desde una pagina hijo</p>
      <p>nombre de persona{nombre} </p>
      <p> Numero desde la funcion {cambiarNombrePorEdad()}</p>
      <p> La suma de los valores es: {suma(3,2)}</p>
    </div>
  )
}
