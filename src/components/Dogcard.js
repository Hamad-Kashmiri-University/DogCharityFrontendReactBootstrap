import React, { Component } from 'react';
import { DataConsumer } from './Context';
import heart from '../images/heart.png';

class Dogcard extends Component {
  render() { 
  const {dogName, imageURL, age, description} = this.props.item;
    return (
<DataConsumer>
      {data => (
           <div className="col-sm-6 col-md-6 col-lg-4 mt-5">
          <div style = { card }>
              <img style={{ display: 'block', width: '100%', height: 'auto' }} src={imageURL}/>
              <div style={ cardblock }>
                  <figure style = { profile } >
                    <img src={heart} style = {{display: 'block', width: '100%', height: '100%', borderRadius: '50%'}} alt=""/>
                  </figure>
                  <h4 className="mt-3" style={{fontSize: '1.28571429em', fontWeight: '700', lineHeight: '1.2857em'}}>{dogName}: {age} years old</h4>
                  <div style={ meta }>
                      <a>Home {dogName} today</a>
                  </div>
                <div style= {{clear: 'both', marginTop: '.5em', color: 'rgba(0, 0, 0, .68)'}}>
                      {description} 
                  </div>
              </div>
              <div style = { cardfooter }>
                  <small>With us Since: date</small>
<a href='/test'><button className="btn float-right btn-sm" style = {{ marginRight: '-8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></a>

                  <a href='/test'><button className="btn  float-right btn-sm" style = {{ marginRight: '-8px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></button></a>
                  <a href='/test'>
                    <button className="btn float-right btn-sm" style = {{ background:'#F2AA4CFF', color: '#fff'}}>show more</button>
                  </a>

              </div>
          </div>
      </div>
       )

      }
      </DataConsumer>
    )
  }
}


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

