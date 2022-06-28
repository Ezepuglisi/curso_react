import React, {useState} from 'react'
import { Button, Text } from '@chakra-ui/react'
import './styles/ItemCount.css'

const ItemCount = ({stock}) => {

    const [cant, setCant] = useState(0)

    const handleAdd = () => {
        stock > cant ? setCant(cant + 1) : alert('No hay stock')
    }

    const handleCant = (e) =>{
        e.target.textContent === '+' ? handleAdd() : setCant(cant - 1)
    }

    return (
        <div className='item-count'>
            <Button
            onClick={handleCant}
            disabled={cant === 0 ? true : false }>
                -
            </Button>
            <Text>
                {cant}
            </Text>
            <Button
            onClick={handleCant}>
                +
            </Button>
        </div>
    )
}

export default ItemCount