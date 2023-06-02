import { ChakraProvider, chakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>{/*<Router></Router> */}</main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
