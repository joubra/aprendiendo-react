// ...existing code...
import React, { useState } from 'react'

const Formulario = () => {
  const [formularioData, setFormularioData] = useState({ nombre: '', apellido: '' })

  const manejarCambio = (event) => {
    const { name, value } = event.target
    setFormularioData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const manejarSubmit = (e) => {
    e.preventDefault()
    console.log(`Nombre: ${formularioData.nombre}, Apellido: ${formularioData.apellido}`)
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="escribe tu nombre"
        name="nombre"
        value={formularioData.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        placeholder="escribe tu apellido"
        name="apellido"
        value={formularioData.apellido}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
      <p>Nombre Completo: {`${formularioData.nombre} ${formularioData.apellido}`}</p>
    </form>
  )
}

export default Formulario
// ...existing code...