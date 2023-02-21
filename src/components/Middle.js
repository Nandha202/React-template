import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Middle.css'
// import  from 'react-bootstrap/Card';
import house from "../img/Calida-Rehab-center-Mumbai-680x350 1.png"
import center from "../img/bradford-recovery-center-1024x575 1.png"
import blind from "../img/SportsPlusHendersonLr-1 1.png"
import resident from "../img/greenhouse-treatment-center 1.png"
import sea from "../img/Seasons-Malibu-63b-1024x615 1.png"
import rahap from "../img/top-rehab-centers-for-addiction-treatment-rehabsindia 1.png"
import { Button, Card } from 'react-bootstrap';


function Middle() {
  return (
    
    <div className='container-fluid middle2'>
    <h class="five">TREATMENT METHODS</h>
    
    <div className='row '>
    <div className='col-md-4 middle3'>
    <Card style={{ width: '18rem', border:'0' }}>
    <Card.Img variant="top" src={house} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <div className='col-md-4 middle4'>
    <Card style={{ width: '18rem',border:'0' }}>
    <Card.Img variant="top" src={center} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div>


  <div className='col-md-4 middle5'>
    <Card style={{ width: '18rem',border:'0' }}>
    <Card.Img variant="top" src={blind} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div> 

  </div>

  <div className='row '>
    <div className='col-md-4 middle3 mt-4'>
    <Card style={{ width: '18rem',border:'0' }}>
    <Card.Img variant="top" src={resident} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <div className='col-md-4 middle4 mt-4'>
    <Card style={{ width: '18rem',border:'0' }}>
    <Card.Img variant="top" src={sea} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div>


  <div className='col-md-4 middle5 mt-4'>
    <Card style={{ width: '18rem',border:'0' }}>
    <Card.Img variant="top" src={rahap} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Featured Residential Centers</h5></Card.Title>
      <Card.Text className='demo1'><i class="fa-light fa-location-dot"></i> Lorem ipsum dolor sit amet <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........
      </Card.Text>
    </Card.Body>
  </Card>
  </div> 

  </div>
  <Button className='button1'  variant="success">View All</Button>
  </div>
  )
}

export default Middle;