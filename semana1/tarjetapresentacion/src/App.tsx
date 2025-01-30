
import './App.css'
import Tarjeta from './Componentes/Tarjeta'

function App() {
 
    
 const persona=[
  {nombre:'Carlos',ocupacion:'Pintor',pais:'Mexico'},
  {nombre:'Jose',ocupacion:'Soldador',pais:'Honduras'},
  {nombre:'Pedro',ocupacion:'Mecanico',pais:'Panama'}
 ]

  return (
    
    <>
   <h1>Tarjeta de Presentacion </h1>
   {persona.map((persona,index) =>(
      <Tarjeta
       key={index}
       nombre={persona.nombre}
       ocupacion={persona.ocupacion}
       pais={persona.pais}
      />
       ))}
   </>
    
  )
  
}

export default App
