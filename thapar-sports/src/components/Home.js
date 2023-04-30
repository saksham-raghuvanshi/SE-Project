import React from 'react'
import cover_image from '../cover_image.jpg'
import acvh from "../img/acvh1.jpg"
import photo_2 from '../photo_2.webp'
import photo_5 from '../photo_5.webp'
import coachi from "../img/coachi.jpg";
import Badminton from "../img/badminton.jpg";
import Football from "../img/Football1.png";
import Tennis from "../img/Tennis.jpg";
import Cricket from "../img/batball.jpg";
import "./CSS/style.css"
import { Card, Button } from 'react-bootstrap';

export default function Home() {
  const coaches = [
    {
      name: 'Saksham',
      image: coachi,
      sport: 'Badminton',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lorem rutrum aliquam. Nullam elementum orci sed nibh feugiat eleifend.'
    },
    {
      name: 'Harshit',
      image: coachi,
      sport: 'Cricket',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lorem rutrum aliquam. Nullam elementum orci sed nibh feugiat eleifend.'
    },
    {
      name: 'Samarth',
      image: coachi,
      sport: 'Football',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lorem rutrum aliquam. Nullam elementum orci sed nibh feugiat eleifend.'
    },
    {
      name: 'Hitesh',
      image: coachi,
      sport: 'Basketball',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lorem rutrum aliquam. Nullam elementum orci sed nibh feugiat eleifend.'
    },
    {
      name: 'Anjali',
      image: coachi,
      sport: 'Swimming',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lorem rutrum aliquam. Nullam elementum orci sed nibh feugiat eleifend.'
    }
  ];
  return (
 // Header 
    <div >
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
   <span className="carousel-control-prev-icon" aria-hidden="false"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="false"></span>
   <span className="visually-hidden">Next</span>
 </button>
</div>



{/* Jumbotron */}
{/* <div className="jumbotron text-center">
                <div id="aboutus"><h1>WELCOME</h1>
                <h4>Thapar Sport Website</h4>
                <p>Stay updated with the latest sports events and announcements, book your swimming entries, and issue sports equipment all in one place
                </p>
                <a href="/about-us"><button className="btn btn-primary" >Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></a></div>
            </div> */}

            <section class="welcome">
  <div class="container text-center">
    <h2 class="text-uppercase">Welcome to Thapar Sports</h2>
    <div class="row">
      <div class="col">
        <img src={Badminton} alt="Image 1"/>
      </div>
      <div class="col">
        <img src={Cricket} alt="Image 2"/>
      </div>
      <div class="col">
        <img src={Tennis} alt="Image 3"/>

      </div>
      <div class="col">
        <img src={Football} alt="Image 4"/>
      </div>
    </div>
    <p>Stay up-to-date with sports events, book swimming entries, and get sports equipment all in one place. Join us and never miss a game or a chance to stay active.</p>
    <a href="/about-us" class="btn" id="aboutbtn">Learn More</a>
  </div>
</section>


{/* News  */}
            <div className="container-fluid mt-1" id="News">
    <div className="row">
        <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span className="d-flex align-items-left">Thapar Sports News</span></div>
                <marquee className="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span className="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span className="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                </marquee>
            </div>
        </div>
    </div>
</div>


<div id="achievements" class="container-fluid py-5">
  <div class="row">
    <div class="col-md-12">
      <h2 class="text-center text-uppercase mb-5">Thapar University Student Achievements</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" src={acvh} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Saksham Mahajan (2nd Year)</h5>
          <p class="card-text">won bronze medal in 55th National Roller Sports Championship held at Kurukshetra, Haryana.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Raghav Mohindru (4th Year, BE-EIC)</h5>
          <p class="card-text">secured 2nd position in Badminton in the event URJA-2018 held at Thapar Institute of Engineering & Technology, Patiala.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Maanvi Maini (3rd Year, BE-ENC)</h5>
          <p class="card-text">won 2 Gold and 1 silver medals in Athletics (200m, 4x100m Relay, 100m) in the event URJA-2018 held at TIET Patiala</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" id="ach-card-img-top" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740" alt="Card image cap"/>
        <div class="card-body" id="ach-card-body">
          <h5 class="card-title">Sports Event 4</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Sports Event 5</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-3" id="achcard">
        <img class="card-img-top" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Sports Event 6</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 text-center">
      <a href="/achievements"  id="achbtn"class="btn btn-primary btn-lg">Learn More</a>
    </div>
  </div>
</div>

{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+1" alt="First slide">
          </div>
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+2" alt="Second slide">
          </div>
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+3" alt="Third slide"/>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+4" alt="Fourth slide"/>
          </div>
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+5" alt="Fifth slide"/>
          </div>
          <div class="col-md-4">
            <img class="d-block w-100" src="https://via.placeholder.com/400x400.png?text=Image+6" alt="Sixth slide"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}






{/* Achievement */}
{/* <div className="container-fluid" id="Achievements">
       <section className="pt-5 pb-5">
    <div className="container-fluid">
        <div className="row text-center" >
            <div className="col-6">
                <h3 className="mb-3">Achievements</h3>
            </div>
            <div className="col-6">
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
        
    </div> */}

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
            
  {/* <div className='row' id="coachs">
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
</div>  */}        
        <div className='container text-center mt-5' id="coachdiv">
        <h2 className='text-uppercase'>Coach</h2>
    </div> 

<div className="container my-5">
      <div className="row">
        {coaches.map((coach, index) => (
          <div className="col my-3" key={index}>
            <Card>
              <Card.Img variant="top" src={coach.image} alt="coach" />
              <Card.Body>
                <Card.Title>{coach.name}</Card.Title>
                <Card.Text>
                  {coach.description}
                </Card.Text>
                <Button variant="primary">{coach.sport}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>


    {/* Facilities


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
               <a href="/facilities" ><button className='btn btn-primary'>
                    More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                </button></a>

            </div>



    </div> */}


    



  
<h2 class="container text-center" id="facilitiesh">OUR SPORTS PROGRAMS</h2>
<p class="container text-center" id="facilitiesp">Tailored Programs for your Sporting Needs – Beginner, Intermediate and Professional Level</p>
<div className="container" id="vercontainer">
      <div className="row">
        <div className="col-md-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-badminton-tab"
              data-toggle="pill"
              href="#v-pills-badminton"
              role="tab"
              aria-controls="v-pills-badminton"
              aria-selected="true"
            >
              Badminton
            </a>
            <a
              className="nav-link"
              id="v-pills-football-tab"
              data-toggle="pill"
              href="#v-pills-football"
              role="tab"
              aria-controls="v-pills-football"
              aria-selected="false"
            >
              FootBall
            </a>
            <a
              className="nav-link"
              id="v-pills-tennis-tab"
              data-toggle="pill"
              href="#v-pills-tennis"
              role="tab"
              aria-controls="v-pills-tennis"
              aria-selected="false"
            >
              Tennis
            </a>
            <a
              className="nav-link"
              id="v-pills-basketball-tab"
              data-toggle="pill"
              href="#v-pills-basketball"
              role="tab"
              aria-controls="v-pills-basketball"
              aria-selected="false"
            >
              Basketball
            </a>
            <a
              className="nav-link"
              id="v-pills-cricket-tab"
              data-toggle="pill"
              href="#v-pills-cricket"
              role="tab"
              aria-controls="v-pills-cricket"
              aria-selected="false"
            >
              Cricket
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div
            className="tab-content"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-badminton"
              role="tabpanel"
              aria-labelledby="v-pills-badminton-tab"
            >
              <div className="content" id="vercontent">
                <img src={Badminton} alt="badminton" />
                <p>The Sports School Badminton Academy with Chief Mentor Pullela Gopichand, strives to provide the best and unique training facilities and methods to our students to groom their willingness to play the sport into a full-fledged profession.</p>
                <a href="/facilities" className="btn btn-primary">Learn More</a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-basketball"
              role="tabpanel"
              aria-labelledby="v-pills-basketball-tab"
            >
              <div className="content" id="vercontent">
                <img src={Tennis} alt="basketball" />
                <p>The Sports School Basketball Academy with Key5 Coaching strives to empower students with knowledge and skills required to excel in the game while fostering positive attitude and competence.</p>
                <a href="/facilities" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          

            <div
              className="tab-pane fade"
              id="v-pills-football"
              role="tabpanel"
              aria-labelledby="v-pills-football-tab"
            >
              <div className="content" id="vercontent">
                <img src={Football} alt="Football" />
                <p>The Sports School Cricket Academy with Centre for Cricketing Excellence (CCE), mentored by Robin Uthappa, offers personalised cricket coaching with the latest in cricket technology and year-round international exposure.</p>
                <a href="/facilities" className="btn btn-primary">Learn More</a>
              </div>

              
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-tennis"
              role="tabpanel"
              aria-labelledby="v-pills-tennis-tab"
            >
              <div className="content" id="vercontent">
                <img src={Tennis} alt="Tennis" />
                <p>The Sports School Cricket Academy with Centre for Cricketing Excellence (CCE), mentored by Robin Uthappa, offers personalised cricket coaching with the latest in cricket technology and year-round international exposure.</p>
                <a href="/facilities" className="btn btn-primary">Learn More</a>
              </div>

            

              
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-cricket"
              role="tabpanel"
              aria-labelledby="v-pills-cricket-tab"
            >
              <div className="content" id="vercontent">
                <img src={Cricket} alt="Cricket" />
                <p>The Sports School Cricket Academy with Centre for Cricketing Excellence (CCE), mentored by Robin Uthappa, offers personalised cricket coaching with the latest in cricket technology and year-round international exposure.</p>
                <a href="/facilities" className="btn btn-primary">Learn More</a>
              </div>

            

              
            </div>
          </div>
        </div>
      </div>
    </div>


    




   </div>
    
  )
}
