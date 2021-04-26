import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <form style={{width: "20vw ", margin: 'auto', paddingTop: '10%'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Login</h6>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
  }
}

export default Login;