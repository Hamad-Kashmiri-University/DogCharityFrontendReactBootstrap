import React, { useState, useEffect } from 'react';
import { DataConsumer } from './Context';
import heart from '../images/heart.png';
import { Modal, Button } from 'react-bootstrap';

function Dogcard({name, traits, description, image, breed, gender, age, id}) {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);
    return (  <div className="col-sm-6 col-md-6 col-lg-4 mt-5">
          <div style = { card }>
              <img style={{ display: 'block', width: '100%', height: '240px' }} src={image}/>
              <div style={ cardblock }>
                  <figure style = { profile } >
                    <img src={heart} style = {{display: 'block', width: '100%', height: '100%', borderRadius: '50%'}} alt=""/>
                  </figure>
                  <h4 className="mt-3" style={{fontSize: '1.28571429em', fontWeight: '700', lineHeight: '1.2857em'}}>{name}</h4>
                  <div style={ meta }>
                      <a>Traits: {traits}</a>
                  </div>
              </div>
              <div style = { cardfooter }>
                  <small>With us Since: Apr 21</small>
<a href='/test'><button className="btn float-right btn-sm" style = {{ marginRight: '-8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></a>

                  <a onClick={handleShowTwo}><button className="btn  float-right btn-sm" style = {{ marginRight: '-8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></button></a>
                  <a onClick={handleShow}>
                    <button className="btn float-right btn-sm" style = {{ background:'#F2AA4CFF', color: '#fff'}}>show more</button>
                  </a>

              </div>
          </div>
          
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6 className="display-4">{name} Details</h6>
        </Modal.Header>
        <Modal.Body> 
            <img className='img-fluid' src={image}></img>
           <div className="container-fluid align-items-center" style={{opacity: '1', textAlign: 'center', color: '#101820FF', height: '45vh', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <h1 className="display-2" style={{paddingTop: '10px'}}>{name}</h1>
        <h4 className="display-5" style={{paddingTop: '10px'}}>Age: {age}</h4>
          <h4 className="display-5" style={{paddingTop: '10px'}}>Gender: {gender}</h4>
          <h4 className="display-5" style={{paddingTop: '10px'}}>Traits: {traits}</h4>
          <h4 className="display-5" style={{paddingTop: '10px'}}>Breed: {breed}</h4>
          <p style={{paddingTop: '20px', marginRight: '30px', marginLeft: '30px'}}>Bio: {description}
        Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est {id}</p>
        </div></Modal.Body>
      </Modal>

      <Modal show={showTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
         <h6 className="display-4">Edit a Dog</h6>
        </Modal.Header>
        <Modal.Body> <form style={{margin: 'auto'}}>
      
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder={name}/>
        </div>
        <div className="form-group">
          <label for="exampleInputBreed1">Breed</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={breed}/>
        </div>
        <div className="form-group">
          <label for="exampleInputDescription1">Description</label>
          <textarea className="form-control" rows="3" id="exampleInputDescription1" placeholder={description}></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputImageURL1">Image URL</label>
          <input type="text" className="form-control" id="exampleInputImageURL1" placeholder={image}/>
        </div>
        <div className="form-group">
          <label for="exampleInputAge1">Age</label>
          <input type="number" className="form-control" id="exampleInputAge1" placeholder={age}/>
        </div>
        <div className="form-group">
          <label for="exampleInputGender1">Gender</label>
          <input type="text" className="form-control" id="exampleInputAge1" placeholder={gender}/>
        </div>
         
        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', float: 'center'}}>Submit</button>
</form></Modal.Body>

      </Modal>
      </div>
);
       
};





const cardblock = {
    fontSize: '1em',
    position: 'relative',
    margin: '0',
    padding: '1em',
    border: 'none',
    borderTop: '1px solid rgba(34, 36, 38, .1)',
    boxShadow: 'none',
}

const meta = {
    fontSize: '1em',
    color: 'rgba(242,170,76,0.9)'
}

const card = {
    fontSize: '1em',
    overFlow: 'hidden',
    padding: '0',
    border: 'none',
    borderRadius: '.28571429rem',
    boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5',
    margin: '20px'
}

const profile = {
    position: 'absolute',
    top: '-12px',
    display: 'inline-block',
    overflow: 'hidden',
    boxSizing: 'border-box',
    width: '30px',
    height: '30px',
    margin: '0',
    border: '1px solid #fff',
    borderRadius: '50%',
    marginTop: '-5px'
}

const cardfooter = {
    fontSize: '1em',
    position: 'static',
    top: '0',
    left: '0',
    maxWidth: '100%',
    padding: '.75em 1em',
    color: 'rgba(0, 0, 0, .4)',
    borderTop: '1px solid rgba(0, 0, 0, .05) !important',
    background: '#fff'
}


export default Dogcard;

