import React from 'react'
import { useState } from "react";

const Contador = () => {

  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1)


  return (
    <>
      <h1> HOOKS - USESTATE</h1>
      <p>contador demo</p>
      <nav>
        <button onClick={sumar}> sumar</button>

        <button onClick={restar}> restar </button>
        <h3> {contador} </h3>


      </nav>
    </>
  )
}

export default Contador