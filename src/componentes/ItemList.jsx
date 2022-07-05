import React from 'react'
import Item from './Item'


import './styles/itemList.css'

const ItemList = ({items}) => {

    return (
        <div className='container row items'>
        {items.length ? (
            <>
            {items.map((item) =>{
                return <Item 
                key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                precio={item.precio}
                img={item.img}
                stock={item.stock}
                 />
            })}
            </>
        ):(
            <>
            <h2>Cargando productos...</h2>
            </>
            
        )

        }
        </div>
    )
}

export default ItemList