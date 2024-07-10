import React from 'react'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import { LoaderProvider } from './context/LoaderContext'
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <LoaderProvider>
      <Loader />
      <Navbar />
      <Hero/>
    </LoaderProvider>
  );
};

export default App;
