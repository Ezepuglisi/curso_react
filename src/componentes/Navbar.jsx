import React from 'react'
import { Flex, Heading, useTheme, IconButton, Icon } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'


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
            <IconButton
                m="1"
                bg={theme.colors.blue[700]}
                size="lg"
                aria-label='save recording'
                color="white"
                icon={<Icon as={AiOutlineShoppingCart} />}
            />
        </Flex>
    )
}

export default AppHeader