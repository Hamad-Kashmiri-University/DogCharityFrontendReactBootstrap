import React, {useState, useContext} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'
// import Cookies from 'universal-cookie';

function Login() {

  const { getLogIn } = useContext(AuthContext); //destructure to get property  
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    //pass event data from fields
  async function login(e) {
    e.preventDefault();
    
    try{
      const loginData = {
        email, password
      }
    
    const res = await axios.post("https://africa-spider-3000.codio-box.uk/api/auth/", loginData);
    await getLogIn();
    history.push("/")
    window.location.reload(false);
    if (res.status === 200 ) {
      console.log("success, user logged in")
      const token = res.data
      localStorage.setItem('jwtoken', token);
//       const cookies = new Cookies();
//       cookies.set('jwtoken', token);
  
    } else {
      console.log(res.status)
    }
      
    }catch (err) {
      console.error(err);
    }
    
  }
  
    return (
      <form onSubmit={login} style={{width: "30vw ", margin: 'auto', paddingTop: '10%'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Login</h6>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>

        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
  
}

export default Login;