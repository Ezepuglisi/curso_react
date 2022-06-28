import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {IconButton, Icon} from '@chakra-ui/react'

const CartWidget = ({theme}) => {
  return (
    <IconButton
                m="1"
                bg={theme.colors.blue[700]}
                size="lg"
                aria-label='save recording'
                color="white"
                icon={<Icon as={AiOutlineShoppingCart} />}
            />
  )
}

export default CartWidget