import React from 'react'
import cover_image from '../cover_image.jpg'
import photo_2 from '../photo_2.webp'
import photo_5 from '../photo_5.webp'
import coachi from "../img/coachi.jpg";
import Badminton from "../img/badminton.jpg";
import Football from "../img/Football.avif";
import Tennis from "../img/Tennis.jpg";
import Cricket from "../img/batball.jpg";

export default function Home() {
  return (
 // Header 
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
 <div className=" carousel-inner ">
   <div className="carousel-item active">
     <img src={cover_image} className="d-block w-100" alt="..."/>
   </div>
   <div className="carousel-item">
     <img src={photo_2} className="d-block w-100" alt="..."/>
   </div>
   <div className="carousel-item">
     <img src={photo_5} className="d-block w-100" alt="..."/>
   </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Next</span>
 </button>
</div>



{/* Jumbotron */}
<div className="jumbotron text-center">
                <div id="aboutus"><h1>About us</h1>
                <p>Stay updated with the latest sports events and announcements, book your swimming entries, and issue sports equipment all in one place
                </p>
                <button className="btn btn-primary">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></div>
            </div>




{/* News  */}
            <div className="container-fluid mt-1" id="News">
    <div className="row">
        <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span className="d-flex align-items-center">&nbsp;Thapar Sports News</span></div>
                <marquee className="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span className="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span className="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                </marquee>
            </div>
        </div>
    </div>
</div>

{/* Achievement */}
<div className="container-fluid" id="Achievements">
       <section className="pt-5 pb-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <h3 className="mb-3">Achievements</h3>
            </div>
            <div className="col-6 text-right">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <span> </span>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next" >
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid"  alt="100%x280" src="http://thapar.edu/upload/images/jan18.jpg"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Saksham Mahajan (2nd Year, BE-Mechanical)</h4>
                                            <p className="card-text">won bronze medal in 55th National Roller Sports Championship held at Kurukshetra, Haryana</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Raghav Mohindru (4th Year, BE-EIC)</h4>
                                            <p className="card-text">secured 2nd position in Badminton in the event URJA-2018 held at Thapar Institute of Engineering & Technology, Patiala</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Maanvi Maini (3rd Year, BE-ENC)</h4>
                                            <p className="card-text">won 2 Gold and 1 silver medals in Athletics (200m, 4x100m Relay, 100m) in the event URJA-2018 held at TIET Patiala</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                       
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
        
    </div>

    {/* <div className="jumbotron text-center">
                <div id="aboutus"><h2>Coach</h2>
                
                </div>
            </div>

<div class="container" id="coach" >


<div class="row">
    
    <div class="card" id="Coach">
  <img class="card-img-top" src={coachi} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Harshit Bhatnagar</h5>
    <p class="card-text">Football Coach</p>
  </div>
  </div>

  </div>
  </div> */}


{/* Coache */}

  

                <div className='container-fluid text-center' id="Coaches">
        <h2>Coach</h2>

                {/* <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col" id="Coachcol">

                        <div class="card" id="Coach">
                            <img src={coachi} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Harshit</h5>
                                    <p class="card-text">Football Coach</p>
                                </div>
                        </div>



                        </div>
                        <div class="col" id="Coachcol">
                        <div class="card" id="Coach">
                            <img src={coachi} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Harshit</h5>
                                    <p class="card-text">Football Coach</p>
                                </div>
                        </div>



                        </div>
                        <div class="col" id="Coachcol">
                        <div class="card" id="Coach">
                            <img src={coachi} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Harshit</h5>
                                    <p class="card-text">Football Coach</p>
                                </div>
                        </div>
                        </div>
                        <div class="col" id="Coachcol">
                        <div class="card" id="Coach">
                            <img src={coachi} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Harshit</h5>
                                    <p class="card-text">Football Coach</p>
                                </div>
                        </div>
                        </div>
                        </div>
                        </div>






</div>*/}
            
  <div className='row' id="coachs">
    <div className='col' >
    <div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={coachi} alt="Avatar" id="coache"/>
    </div>
    <div class="flip-card-back">
      <h1>Saksham</h1>
      <p>Badminton Coach</p>
    
    </div>
  </div>
</div>
    </div>


    <div className='col'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={coachi} alt="Avatar" id="coache"/>
    </div>
    <div class="flip-card-back">
      <h1>Harshit</h1>
      <p>Cricket Coach</p>
    </div>
  </div>
</div>
    </div>


    <div className='col'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={coachi} alt="Avatar" id="coache"/>
    </div>
    <div class="flip-card-back">
      <h1>Samarth</h1>
      <p>Football Coach</p>
    </div>
  </div>
</div>
    </div>



    <div className='col'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={coachi} alt="Avatar" id="coache"/>
    </div>
    <div class="flip-card-back">
      <h1>Harshit</h1>
      <p>Basketball Coach</p>
    </div>
  </div>
</div>
    </div>


    <div className='col'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={coachi} alt="Avatar" id="coache"/>
    </div>
    <div class="flip-card-back">
      <h1>Harshit</h1>
      <p>Basketball Coach</p>
    </div>
  </div>
</div>
    </div>
    </div>          
        
    </div>


    <div className='container-fluid text-right' id="coachbtn">
                <button className='btn btn-primary'>
                    More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                </button>

            </div>



    {/* Facilities */}


    <div className='container-fluid text-center' id="Facilities">
        <h2>Facilities</h2>

        <div className='row'>
        <div className='col' id="facilitiesimg">
  <img src={Football} alt="Avatar" id="image"/>
  <div id="overlay">
    <div id="text">Football</div>
  </div>
</div>

<div className='col' id="facilitiesimg">
  <img src={Cricket} alt="Avatar" id="image"/>
  <div id="overlay">
    <div id="text">Cricket</div>
  </div>
</div>


<div className='col' id="facilitiesimg">
  <img src={Tennis} alt="Avatar" id="image"/>
  <div id="overlay">
    <div id="text">Tennis</div>
  </div>
</div>

<div className='col' id="facilitiesimg">
  <img src={Badminton} alt="Avatar" id="image"/>
  <div id="overlay">
    <div id="text">badminton</div>
  </div>
</div>
</div>

<div className='container-fluid text-right' id="sportbtn">
                <button className='btn btn-primary'>
                    More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                </button>

            </div>



    </div>







   </div>
    
  )
}
