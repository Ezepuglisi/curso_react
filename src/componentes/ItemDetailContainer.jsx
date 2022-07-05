import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import products from '../productos.js'
import ItemDetail from './ItemDetail.jsx'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState(null)

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    const getById = (array,id) => array.find(element => element.id == id)  

    const getProductsFromDB = async () => {
        try {
            const result = await getProductos;
            setItem(getById(result,id))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductsFromDB();
    }, []);

    return (
        <div>{item ? <ItemDetail item={item} />: <p>Cargando producto...</p>}</div>
    )
}

export default ItemDetailContainer