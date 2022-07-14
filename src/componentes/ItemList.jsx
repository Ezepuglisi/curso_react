import {SimpleGrid,Stack } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'


import './styles/itemList.css'

const ItemList = ({items}) => {

    return (
        <Stack direction={['column', 'row']} justifyContent={'center'}>
            <SimpleGrid columns={[1,2,3]} spacing='40px'>
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
                id={item.id}
                 />
            })}
            </>
        ):(
            <>
            <h2>Cargando productos...</h2>
            </>
            
        )

        }
         </SimpleGrid>
        </Stack>
        
    )
}

export default ItemList