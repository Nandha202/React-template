import React from 'react'
import './Footer.css'
// import Figure from 'react-bootstrap/Figure';
// import img from './../img/young-woman-practicing-yoga-nature 1.png'

function Foot() {
  return (
    <div class="container-fluid img21">
       <div className='row'>
        <div className='col-5'>
          <h3 className='demo'>FEATURED RESIDENTIAL CENTERS</h3>
          <p className=' demo mt-5 text-light' style={{ marginTop: '500px',fontFamily: 'Poppins',fontSize:'13px'}}><i class="fa-light fa-location-dot"></i>  Lorem ipsum dolor sit amet,</p>
          <h5 className='demo text-light' style={{ marginTop: '80px' }}>Featured Residential Centers</h5>
          <p className='demo text-light demo1'  style={{ marginTop: '120px',fontSize:'13px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='col-7'>
          <div className='img22'>
            <h4 className='colu'>AD</h4>
          </div>
       
        </div>
       </div>
    </div>
  )
}

export default Foot;