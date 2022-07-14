import React, {useState} from 'react'
import { Box, Button, Text,useColorModeValue } from '@chakra-ui/react'
import './styles/ItemCount.css'

const ItemCount = ({item,onAdd}) => {

    const [cant, setCant] = useState(0)

    const handleAdd = () => {
        item.stock > cant ? setCant(cant + 1) : alert('No hay stock')
    }

    const handleCant = (e) =>{
        e.target.textContent === '+' ? handleAdd() : setCant(cant - 1)
    }

    return (
        <>
        <Box className='item-count'>
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
            </Box>
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
              }}
              onClick={()=>onAdd(item,cant)}>
              Add to cart
            </Button>
        </>
        
    )
}

export default ItemCount