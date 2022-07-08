import React from 'react'
import { Flex, Heading, useTheme} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'



const AppHeader = () => {
    const theme = useTheme()

    return (
        <Flex
            as="nav"
            flex="1"
            mb={4}
            padding="1rem"
            bg={theme.colors.blue[700]}
            color="white"
            display="flex"
            justifyContent="space-around"

        >
            <Flex align="center">
                <Link to='/'><Heading size="md">Marvel Items</Heading></Link>
            </Flex>
            <CartWidget theme={theme}/>
        </Flex>
    )
}

export default AppHeader