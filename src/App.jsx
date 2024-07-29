import React from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import { LoaderProvider } from './context/LoaderContext'
import Hero from './components/Hero';

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
