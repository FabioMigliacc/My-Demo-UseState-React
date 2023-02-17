

import React, { useState } from 'react'

export const TextUpdate = () => {
  const [nombre, setNombre] = useState('Fulanito')

  const cambiarNombre = (_event: any, nombreFijo: string) => {

    setNombre(nombreFijo)

  }

  return (
    <div>
      <p>  Text change demo </p>
      <h2>  {nombre} </h2>

      <button className='btn2'
        onClick={(event) => cambiarNombre(event, 'Chanchito feliz')}>
        change text! </button>

      <input type='text'
        placeholder=' isertar nombre'
        onKeyUp={event => cambiarNombre(event , (event.target as HTMLInputElement).value)} />

    </div>
  )
}





