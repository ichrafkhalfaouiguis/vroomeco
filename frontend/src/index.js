import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Home from './screens/Home'; 
import Rides from './screens/Rides'; 
import RideDetail from './screens/RideDetail'; 
import NotFound from './screens/NotFound'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-toastify/dist/ReactToastify.css'; 
//import { ToastContainer } from 'react-toastify'; 

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/rides/:id" element={<RideDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   /
    </Router>
  </React.StrictMode>,
  rootElement
);
