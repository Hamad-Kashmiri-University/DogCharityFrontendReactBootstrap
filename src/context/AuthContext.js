//auth context inspire from Devistry youtube channel
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

//provide true ur false to each component if logged in
function AuthProvider(props) {
  
  const[loggedIn, setLoggedIn] = useState(undefined);
  
  
  
  async function getLogIn() {
  
    const token = localStorage.getItem('jwtoken');
    const logInBoolRes = await axios.get("https://africa-spider-3000.codio-box.uk/api/auth/loggedIn/", {
                                          headers: {
                                          'x-jwtoken': token
                                                              }
                                                            }
                                                          );
    console.log(logInBoolRes)
    setLoggedIn(logInBoolRes.data); 
    return loggedIn;
    
    //set true or false if loggedin
  }
  
  //only run on firtst update due to empty list
  useEffect(() => {
    getLogIn();
  }, [])
   
  // pass loggedin state and getlogin function to provider for components to consume
  return <AuthContext.Provider value={{loggedIn, getLogIn}}>
          {props.children}
         </AuthContext.Provider>
};

export default AuthContext;
export { AuthProvider };

