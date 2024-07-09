import React from 'react'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import { LoaderProvider } from './context/LoaderContext'

const App = () => {
  return (
    <LoaderProvider>
      <Loader />
      <Navbar />
    </LoaderProvider>
  );
};

export default App;
