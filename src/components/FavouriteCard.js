import React from 'react';

/**

* @function favourite card

* @params { object } holds data from axios req in parent component

* @description holds card for favourites

*/ 
 
function FavouriteCard({favId, favDogName, favDogImage}) {
  

  return (   <div className="col-sm-6 col-md-6 col-lg-4 mt-5">
                    <div className="card">
                      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img
                          src={favDogImage}
                          className="img-fluid"
                        />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                      </div>
                      <div className="card-body">
                        <h6 className="display-4">You Liked {favDogName}!</h6>
                        <p className="display-9">
                          This card is en example to show favourite functionality, where the dog data is accessible through a favourite
                        </p>
                      </div>
                    </div>
                  
              </div>
)}
 
export default FavouriteCard;