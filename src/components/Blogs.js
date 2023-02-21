import React from 'react'
import furits from './../img/vegetables-fruits-white 1.png'
import Card from 'react-bootstrap/Card';
import Blogs from './Blogs.css'

function Logs() {
  return (
    <div className='container-fluid seven'>
        <h3 className='seven5'>LATEST NEWS & BLOGS</h3>
        <div className='row'>
            <div className='col-5 seven1'>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={furits} />
    <Card.Body className='blog-body'>
      <Card.Title className='blog-title'><h5>Nourishing the Recovering Body: Nutrition in Rehab</h5></Card.Title>
      <Card.Text>
      <h6>Eating well is a huge part of feeling well. Food doesn’t just support wellness—it can also be a source of joy. When you go to rehab for addiction or mental health treatment, great meals can be the thing you look forward to.</h6>
      </Card.Text>
    </Card.Body>
  </Card>
            </div>
            <div className='col-7'>
                <div>
                <div className='col-2 image'></div>
                <div className='col-4'>
                    <p className='seven3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>Read More</p>
                </div>
                </div>


                <div>
                <div className='col-2 image1'></div>
                <div className='col-4'>
                <p className='seven3' style={{ marginTop:'90px',color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>Read More</p>
                </div>
                </div>

                <div>
                <div className='col-2 image2'></div>
                <div className='col-4'>
                <p className='seven3' style={{ marginTop:'180px',color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>Read More</p>
                </div>
                </div>

                <div>
                <div className='col-2 image3'></div>
                <div className='col-4'>
                <p className='seven3' style={{ marginTop:'270px',color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>Read More</p>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Logs;