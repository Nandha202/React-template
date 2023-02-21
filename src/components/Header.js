import React from 'react'
import Container from 'react-bootstrap/Container';
import './../components/Header.css'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  {BiRightArrowAlt} from 'react-icons/bi'
// import './../components/HeaderMQ.css';
// import { Fa500Px } from "react-icons/fa";
function Header() {
  return (

    <div className='container-fluid middle '>

      <h5 className='center'>EXPLORE TOP TREATMENT DESTINATION AROUND THE WORLD</h5>
      <div class="container text-center">
        <div class="row">
          <div class="col-3 img2">
            <div className='text'>
              <span className='span'> <h5 className='bold'>Colorado</h5>
                <p className='bold1'>Experience natural beauty while in treatment.</p></span>
            </div>
          </div>
          <div class="col-3 img3">
            <div className='text'>
              <h5 className='bold'>Bali </h5>

              <p className='bold1'>Travel to a tropical oasis for quality treatment.</p>
            </div>
          </div>
          <div class="col-3 img4">
            <div className='text'>
              <h5 className='bold'>Arizona</h5>
              <p className='bold1'>Escape to the desert for amazing treatment.</p>
            </div>
          </div>
        </div>
      </div>
      <h5 className='bold3'>View all Destinations <BiRightArrowAlt className='icon_arrow'/></h5>
    </div>
  )
}

export default Header;
