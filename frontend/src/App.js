// App.js
import React from 'react';

import Header from './components/Header';



//import { Outlet } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
       <Header/>
        <Home/>
       <Footer/>
   
    </div>
  );
};

export default App;
