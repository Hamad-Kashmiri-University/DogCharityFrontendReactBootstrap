import React, {useState, useContext} from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'
function Register() {
  
  const history = useHistory();
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpCode, setSignUpCode] = useState("");
  const { getLogIn } = useContext(AuthContext); //destructure to get property  

  //pass event data from fields
  async function register(e) {
    e.preventDefault();
    
    try{
      const registerUserData = {
        name, email, password, signUpCode
      }
    
    const res = await axios.post("https://africa-spider-3000.codio-box.uk/api/users/", registerUserData);
    await getLogIn();
    history.push("/login")
    if (res.status == 200 ) {
      console.log("success, user registered")
    } else {
      console.log(res.status)
    }
      
    }catch (err) {
      console.error(err);
    }
    
  }
  
    return (
 <form onSubmit={register} style={{width: "30vw ", margin: 'auto', paddingTop: '100PX'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Register</h6>
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        <div className="form-group">
          <label for="exampleInputSignUpCode1">Your Code</label>
          <input type="text" className="form-control" id="exampleInputSignUpCode1" placeholder="Sign-up code" onChange={(e) => setSignUpCode(e.target.value)} value={signUpCode}/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Accept Terms & Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
}

export default Register;