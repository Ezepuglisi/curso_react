import React from 'react'
import Item from './Item'
import products from '../productos.js'
import { useEffect, useState } from 'react'
import './styles/itemList.css'

const ItemList = () => {

    const [items, setItems] = useState([])
    
    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    const getProductsFromDB = async () => {
        try {
          const result = await getProductos;
          setItems(result);
        } catch (error) {
          console.log(error);
        }
      };

      
      useEffect(() => {
        getProductsFromDB();
      }, []);
    


      console.log(items)

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