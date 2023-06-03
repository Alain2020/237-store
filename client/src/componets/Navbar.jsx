import React from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  Link, 
  IconButton, 
  Icon, 
  Text, 
  useDisclosure, 
  useColorMode,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiTechnoHeart } from 'react-icons/gi';

const links =[
    {linkName: 'Products', path: '/products'},
    {linkName: 'ShoppingCart', path: '/cart'}
]

const NAVLink = ({ path, children }) => (
    <Link
     as={ReactLink}
     to={path}
     px={2}
     py={2}
     rounded='md'
     _hover={{ textDecoration: 'none' , bg: useColorModeValue('gray.200','gray.700') }}>
        {children}
     </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to='/'>
            <Flex alignItems='center'>
              <Icon as={GiTechnoHeart} h={6} w={6} color='orange.400' />
              <Text fontWeight='extrabold'>S&J Store</Text>
            </Flex>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
