import React, { useState } from 'react'

// contador de letras
export default function FormularioContador() {
  // declaracion de variables
  const[texto,setTexto]=useState<String>("")
  const [contadorLetaçras,setcontadorLetras]= useState<number>(0)
  
   
  return (
    <div>
        <h1>
            Contador de letras
        </h1>
                <textarea name="letras" id="letras" rows={15} cols={50}
                placeholder='Ingreese una Palabra'>

                </textarea>
    </div>
  )
}
