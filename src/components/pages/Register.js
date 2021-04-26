import React, {Component} from 'react';

class Register extends Component {
  render() {
    return (
 <form style={{width: "20vw ", margin: 'auto', paddingTop: '100PX'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Register</h6>
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="exampleInputSignUpCode1">Your Code</label>
          <input type="text" className="form-control" id="exampleInputSignUpCode1" placeholder="Sign-up code"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Accept Terms & Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
  }
}

export default Register;