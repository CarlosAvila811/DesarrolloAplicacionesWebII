
import { useEffect, useState } from 'react'
import './App.css'
import FormularioContador from './assets/Componentes/FormularioContador'

function App() {
// usestate [set,get]
  const[contador,setcontador]=useState(0)

  // hooks definir o detectar el estado de la variable= useEffect
  //[] vacia, decidimos que se ejecuta al cargar la pagina
  //[objeto] escuchando el cambio en un control, el cambio dentro de un formulario

  useEffect(()=>{
     console.log("Componente montado")
     const intervalId= setInterval(()=>{
      setcontador(preveContador=> preveContador+1)
     },1000)
     return()=> clearInterval(intervalId)  
  },[])
  return (
    <>
      <h1>Valor del contador {contador}</h1>
      <FormularioContador></FormularioContador>
    </>
  )
}

export default App
