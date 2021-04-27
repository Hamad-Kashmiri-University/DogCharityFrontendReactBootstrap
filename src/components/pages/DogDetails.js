import React, {Component} from 'react';


class DogDetails extends Component {
  render() {      
      return (
        <React.Fragment>
          <div className="container-fluid align-items-center" style={{textTransform: 'uppercase', textAlign: 'center', color: 'black', opacity: '0.75', height: '100vh', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg" + ")"}}>
          <h1 className="display-1 font-weight-bold" style={{paddingTop: '10%'}}>Rodney</h1>
          <h4 className="display-4" style={{paddingTop: '20px'}}>Rodney is a 6 year old who has traits</h4>
          <p className="font-weight-bold" style={{paddingTop: '20px', marginRight: '100px', marginLeft: '100px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat.
        Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est"</p>
        </div>
        </React.Fragment>
        );
  }
}

export default DogDetails;