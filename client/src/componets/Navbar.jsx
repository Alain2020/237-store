import { 
    Box, 
    Flex, 
    HStack, 
    Link, 
    IconButton, 
    Icon, 
    Text, 
    useDisclosure, 
    Button,
    Stack,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
import {link as Reactlink} from 'react-router-dom';
import {HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {GiTechnoHeart } from 'react-icons/gi';

const Navbar = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const {colorMode, toggleColorMode} = useColorMode
    return (

    );
};

export default Navbar;
