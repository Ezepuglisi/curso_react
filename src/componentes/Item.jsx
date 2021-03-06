import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../src/context/CartContext';
//import ItemCount from './ItemCount';


export default function Item({titulo,descripcion,precio,img,stock,id}) {

  const cartContex = useContext( CartContext );
  console.log(cartContex)

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={img}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {descripcion}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {titulo}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${precio}
            </Text>
          </Stack>
          <Link to={`/item/${id}`}><Button>Ver más</Button></Link>
        </Stack>
      </Box>
    </Center>
  );
}