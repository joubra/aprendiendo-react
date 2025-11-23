// ...existing code...
import React, { useState } from 'react'

const MensajeCondicional = () => {
  const [mensaje, setMensaje] = useState('')

  const enviar = () => {
    alert(`Mensaje enviado: ${mensaje}`)
    setMensaje('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <div style={{ marginTop: 10 }}>
        {mensaje ? (
          <>
            <p>Tu mensaje es: <strong>{mensaje}</strong></p>
            <button onClick={enviar}>Enviar</button>
          </>
        ) : (
          <p>No hay ningún mensaje aún</p>
        )}
      </div>
    </div>
  )
}

export default MensajeCondicional
// ...existing code...