import React, { useState } from 'react'
import Mensaje from './Mensaje';

const PlanificadorDeGastos = ({presupuesto, setPresupuesto}) => {

  const [mensaje,setMensaje] = useState('')
  const handlePresupeusto = (e) => {
    e.preventDefault();
    if(presupuesto === 0 ||presupuesto < 0){
      setMensaje("No es un presupuesto valido")
      return
    }
    setMensaje('');
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form className='formulario' onSubmit={handlePresupeusto}>
          <div className='campo'>
            <label>Nuevo Presupuesto</label>

            <input
              className='nuevo-presupuesto'
              type='number'
              placeholder='Agrega tu presupuesto.'
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
            />

            <input type="submit" value="agregar" />
            {mensaje &&<Mensaje tipo="error">{mensaje}</Mensaje>}
          </div>
        </form>
    </div>
  )
}

export default PlanificadorDeGastos