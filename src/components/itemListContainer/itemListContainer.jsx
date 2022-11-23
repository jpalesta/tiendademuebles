import React from 'react'
import "./ItemListContainer.css"

const muebles = ["cama","cómoda", "mesa", "silla"]

const ItemListContainer = () => {
  return (
    <div>
        <ul>
            {muebles.map((mueble)=> {
                    return <li key= {mueble}>{mueble}</li>
            })
            }
        </ul>
    </div>
  )
}

export default ItemListContainer