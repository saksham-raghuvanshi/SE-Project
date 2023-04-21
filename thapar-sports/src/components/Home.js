import React from 'react'
import cover_image from '../cover_image.jpg'
import photo_2 from '../photo_2.webp'
import photo_5 from '../photo_5.webp'


export default function Home() {
  return (
    
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

<div class="jumbotron text-center">
                <div id="aboutus"><h1>About us</h1>
                <p>Stay updated with the latest sports events and announcements, book your swimming entries, and issue sports equipment all in one place
                </p>
                <button class="btn btn-primary">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></div>
            </div>

            <div class="container-fluid mt-1" id="News">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;Thapar Sports News</span></div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span class="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span class="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                </marquee>
            </div>
        </div>
    </div>
</div>


<div class="container-fluid" id="Achievements">
       <section class="pt-5 pb-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Achievements</h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <span> </span>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next" >
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid"  alt="100%x280" src="http://thapar.edu/upload/images/jan18.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Saksham Mahajan (2nd Year, BE-Mechanical)</h4>
                                            <p class="card-text">won bronze medal in 55th National Roller Sports Championship held at Kurukshetra, Haryana</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Raghav Mohindru (4th Year, BE-EIC)</h4>
                                            <p class="card-text">secured 2nd position in Badminton in the event URJA-2018 held at Thapar Institute of Engineering & Technology, Patiala</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Maanvi Maini (3rd Year, BE-ENC)</h4>
                                            <p class="card-text">won 2 Gold and 1 silver medals in Athletics (200m, 4x100m Relay, 100m) in the event URJA-2018 held at TIET Patiala</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://img.freepik.com/premium-vector/athlete-icon-sportsman-with-medal-flat-style-avatar-sports-people-vector-illustration-cartoon-design-isolated-white-background_153097-2533.jpg?w=740"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

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


   </div>
    
  )
}
