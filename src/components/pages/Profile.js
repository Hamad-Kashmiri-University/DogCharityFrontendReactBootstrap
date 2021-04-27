import React, {Component} from 'react';

function Profile() {
    return (
 <form style={{width: "30vw", margin: 'auto', paddingTop: '60px'}}>
      <h6 className="display-4" style={{paddingBottom: '20px'}}>Add a Dog</h6>
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label for="exampleInputBreed1">Breed</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter breed"/>
        </div>
        <div className="form-group">
          <label for="exampleInputDescription1">Description</label>
          <textarea className="form-control" rows="3" id="exampleInputDescription1" placeholder="Add a description"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputImageURL1">Image URL</label>
          <input type="text" className="form-control" id="exampleInputImageURL1" placeholder="Image URL"/>
        </div>
        <div className="form-group">
          <label for="exampleInputAge1">Age</label>
          <input type="number" className="form-control" id="exampleInputAge1" placeholder="Enter Age"/>
        </div>
        <div className="form-group">
          <label for="exampleInputGender1">Gender</label>
          <input type="text" className="form-control" id="exampleInputAge1" placeholder="Enter Gender"/>
        </div>
         
        <button type="submit" className="btn btn-primary" style = {{ background:'#F2AA4CFF', color: '#fff', marginTop: '20px'}}>Submit</button>
</form>
    )
}

export default Profile;