
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Second from './components/Second';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import Find from './components/Find';
import Middle from './components/Middle';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Test from './components/Test';
// import Tube from './components/Tube';
// import Footer from './components/Footer';



 


function App() {
  return (
    <div>
  <Navbar/>
  <Home/>  
  <Find/> 
  <Second/>
  <Middle/>
  <Header/> 
  <Blogs/>
  <Footer/>
   {/* <Tube/> */}
   {/* <Test /> */}
  </div>
  );
}

export default App;
