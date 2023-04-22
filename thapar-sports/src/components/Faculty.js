import React from 'react';
import "./CSS/style.css";
import coachi from "../img/coachi.jpg";
// import ig1 from "../img/ig1.jpg";
// import ig2 from "../img/ig2.jpg";
// import ig3 from "../img/ig3.jpg";
// import ig4 from "../img/ig4.jpg";



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

    <br/><br/><br/>
    <div className="container text-center" id="facultycont">
    <div className="row">
        <div className="col" id="sirA">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name4</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal4" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name5</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal5" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" id="facultycards">
                <img src={coachi} className="card-img-top" alt="..."/>
                <div className="card-body" id="Facultycardbody">
                    <h5 className="card-title">Coach Name6</h5>
                    <p className="card-text">Sports which he engages to...</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal6" className="btn btn-primary">See
                        more</a>
                </div>
            </div>
        </div>
    </div>
    </div>

    <br/>



{/* <!-- Button trigger modal --> */}
{/* <!--<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1"> -->
<!--  Launch demo modal -->
<!-- </button> --> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-1</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-2</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-3</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-4</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-5</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title fs-5" id="exampleModalLabel">Ccach Name-6</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <img src={coachi} alt="Coach1"/>
                    </div>
                    <div className="col">
                        The institute has several well-maintained playgrounds and International standard synthetic
                        athletic track, synthetic tennis court synthetic Basketball court and Synthetic Badminton
                        indoor court to encourage the students to take part in different games such as Cricket,
                        Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <div className="jumbotron text-center">
                <div id="aboutus"><h2>Sports Facilities</h2>
                </div>
                </div>

{/* <h2 id="facilitiesheading">Sports Facilities</h2> */}

{/* <!-- Portfolio Gallery Grid --> */}
{/*<div className="row">
    <div className="column">
        <div className="content">
            <img src={ig1} alt="Mountains" id="portfolio" />
            <h3>Badminton</h3>
            <p>Content</p>
        </div>
    </div>
    <div className="column">
        <div className="content">
            <img src={ig2} alt="Lights" id="portfolio"/>
            <h3>Cricket</h3>
            <p>Content</p>
        </div>
    </div>
    <div className="column">
        <div className="content">
            <img src={ig3} alt="Nature" id="portfolio"/>
            <h3>Athletics</h3>
            <p>Content</p>
        </div>
    </div>
    <div className="column">
        <div className="content">
            <img src={ig4} alt="Mountains" id="portfolio"/>
            <h3>Basketball</h3>
            <p>Content</p>
        </div>
    </div>
</div>

<div className="next_page text-center">
    <a href="#"  className="btn btn-primary">View more</a>
</div> 

*/}















    </div>


  )
}
