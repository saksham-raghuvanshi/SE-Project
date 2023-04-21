import React from 'react';
import "./CSS/style.css";
import coachi from "../img/coachi.jpg"





export default function Faculty() {
  return (
    <div>
    {/* <h1 className="display-2"><b>Our Coaches</b></h1> */}


    <div className="jumbotron text-center">
                <div id="aboutus"><h1>Our Coaches</h1>
                </div>
                </div>

<div className="container text-center" id="facultycont">
    <div className="row">
        <div className="col" id="fcard">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name1</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>

        <div className="col" id="fcard">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name2</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>
        <div className="col" id="fcard">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name3</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>


  )
}
