//page inspired from 80/20 coding youtube channel
import React, {Component} from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container" style = {{ marginTop: '100px'}}>
        <div className="row">
          <div className="col-md-12">
             <div className="error-template">
                <h1 className="display-4 font-weight-bold">Oops!</h1>
                <h2 className="display-7">404 Error - Not Found!</h2>
                <div className="error-details">
                      There was an error on the server. The page you are trying to access was not found!
                </div>
                <div>
                  <a href='/'>
                    <button className="btn btn-lg" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Go Home</button>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;