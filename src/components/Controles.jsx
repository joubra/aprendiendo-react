import React from 'react'

const Controles = ({setcontador, contador}) => {
  return (
    <div>
        <button onClick={() => {setcontador(contador + 1)}}>
            Incrementar

        </button>
      <button onClick={() => {setcontador(contador - 1)}}>
            Decrementar
        </button>
        <button onClick={() => {setcontador(0)}}>
            Resetear
        </button>
    </div>
  )
}

export default Controles
