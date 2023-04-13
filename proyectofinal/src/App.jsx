
import React from 'react'
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Hero from './components/Hero/index';
import Navbar from './components/Napvar';
import PortfolioCards from './components/Potfolio-cards';
import PricesCard from './components/Prices-card';
import SeccionFinal from './components/Seccion-final';
import ServiceCards from './components/Service-cards';
import Testimonials from './components/Testimonials';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Hero></Hero>
        <ServiceCards />
        <PortfolioCards />
        <PricesCard />
        <Testimonials />
        <SeccionFinal />
        <Formulario />
        <Footer><h1>soy footer</h1></Footer>
      </ChakraProvider>
    </div>
  );
}

export default App;
