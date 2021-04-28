import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

/**

* @function Profile page functional component

* @returns returns rendered page 

*/

function Profile() {
  
  const history = useHistory();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
 
/**

* @function add dog

* @description redirects if successful axios post req to dogs endpoint

*/    
  
    async function addNewDog(e) {
    e.preventDefault();
    
    try{
      const newDogData = {
        name, breed, description, imageURL, age, gender
      }
     console.log(newDogData);
    const token = localStorage.getItem('jwtoken');
    const res = await axios.post("https://africa-spider-3000.codio-box.uk/api/dogs/", 
                                 newDogData,
                                 {headers: {'x-jwtoken': token }});
    history.push("/")
    
    }catch (err) {
      console.error(err);
    }
    
  }
  
    return (
 <form onSubmit={addNewDog} style={{width: "30vw", margin: 'auto', paddingTop: '60px'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Add a Dog</h6>
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div className="form-group">
          <label for="exampleInputBreed1">Breed</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter breed"onChange={(e) => setBreed(e.target.value)} value={breed}/>
        </div>
        <div className="form-group">
          <label for="exampleInputDescription1">Description</label>
          <textarea className="form-control" rows="3" id="exampleInputDescription1" placeholder="Add a description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputImageURL1">Image URL</label>
          <input type="text" className="form-control" id="exampleInputImageURL1" placeholder="Image URL" onChange={(e) => setImageURL(e.target.value)} value={imageURL}/>
        </div>
        <div className="form-group">
          <label for="exampleInputAge1">Age</label>
          <input type="number" className="form-control" id="exampleInputAge1" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} value={age}/>
        </div>
        <div className="form-group">
          <label for="exampleInputGender1">Gender</label>
          <input type="text" className="form-control" id="exampleInputAge1" placeholder="Enter Gender" onChange={(e) => setGender(e.target.value)} value={gender}/>
        </div>
         
        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
}

export default Profile;