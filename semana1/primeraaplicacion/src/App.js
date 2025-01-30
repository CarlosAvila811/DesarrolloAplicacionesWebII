import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/saludo';
import Saludo2 from './componentes/Saludo2.tsx';  
import PersonaComponent from './componentes/PersonaComponent.tsx';
import PersonaComponentProps from './componentes/PersonaComponentProps.tsx';

function App() {

  const nombre="Ana"
  let apellido="Juarez"
  let edad=20
  let telefono='1231598'
  let correo='ana@gmail.com'
  return (
    <div className="App">
      <header className="App-header">
      
      <p>Primera aplicaion en react JS</p>
       {/*<Saludo></Saludo>

       <Saludo2 nombre='Carlos'></Saludo2>
      <PersonaComponent nombre={nombre} apellido={apellido} edad={edad}telefono={telefono}correo={correo}></PersonaComponent>*/}
      <PersonaComponentProps></PersonaComponentProps>
      </header>
    </div>
  );
}

export default App;
