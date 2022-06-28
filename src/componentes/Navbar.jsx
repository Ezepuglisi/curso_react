import React from 'react'
import { Flex, Heading, useTheme, IconButton, Icon } from '@chakra-ui/react'
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
                <Heading size="md">Marvel Items</Heading>
            </Flex>
            <CartWidget theme={theme}/>
        </Flex>
    )
}

export default AppHeader