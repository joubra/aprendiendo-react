import { useState } from 'react'
import Props from './components/Props'
import Contador from './components/Contador';
import Controles from './components/Controles';
import InpuTexto from './components/InpuTexto';
import Formulario from './components/Formulario';
import MensajeCondicional from './components/MensajeCondicional';



function App() {
  const [contador, setcontador] = useState(0);


  return (
    <>
      <Props />
      <hr/> 
      <Contador contador = {contador} />
      <Controles contador={contador} setcontador={setcontador} />
      <hr/>
      <InpuTexto /> 
      <hr/>
      <Formulario />
      <hr/>
      <MensajeCondicional />
        
  </>
  )
}

export default App
