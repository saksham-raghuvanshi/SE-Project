import React from 'react'
import synthetic from "../img/synthetic.jpeg";
import virat from "../img/virat.jpeg";
import thapar from "../img/thpppp.jpeg";
import ach1sp from "../img/ach1sp.jpg";
import cricket from "../img/CRICKET_GROUND.jpg"

export default function About() {
    return (
        <div>
            <div class="container-fluid" id="aboutfront">
                <img id="synthetic" src={synthetic} alt="Track"/>
                    <div class="centered" id="centeredabout">About Us</div>
            </div>
            <div class="container text-center" id="description">
                <div class="row">
                    <h2 id="mcbc">Message from Admin</h2><br/>
                        <div class="col-md">

                            <div>
                                <img src={virat} id="msg"/>
                            </div>
                        </div>
                        <div class="col" id="admin_msg">
                            <i class="fa-solid fa-messages"></i>
                            <p><b>Parents around the world face the difficult decision of letting their children pursue a career in
                                sports as the traditional education system is not flexible enough to balance both sports and
                                academics. This can take a toll on their academic qualifications or force them to quit their
                                sporting dreams. Identifying the persistence of this issue in India, The Sports Department was
                                established with a vision to integrate sports and education to encourage young sports enthusiasts
                                and support professional athletes.</b></p>
                        </div>
                </div>
            </div>
            <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa-regular fa-hockey-sticks"></i>
                            <h2 class="font-weight-light">Professional Synthetic Track</h2>
                            <p class="font-italic text-muted mb-4">We believe that sports have the power to bring people
                                together and inspire greatness. Whether you are a fan of football, basketball, soccer, or any
                                other sport, we have got you covered. We aim to create a community of like-minded individuals
                                who share our passion for sports and are always eager to learn more.</p><a href="#"
                                    class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={synthetic} alt=""
                            class="img-fluid mb-4 mb-lg-0" id="photo_track"/></div>
                    </div>
                    <br></br><br></br><br></br>
                        <div class="row align-items-center">
                            <div class="col-lg-5 px-5 mx-auto"><img src={cricket} alt="" class="img-fluid mb-4 mb-lg-0" id="photo_ground"/>
                            </div>
                            <div class="col-lg-6">
                                <h2 class="font-weight-light">Our Mission</h2>
                                <p class="font-italic text-muted mb-4">Our mission is to create a community of sports fans who share
                                    a common love and appreciation for the games we all enjoy. We value integrity, professionalism,
                                    and accuracy in everything we do, and we pride ourselves on being a trusted source of sports
                                    news and information.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn
                                        More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                        <div class="bg-white py-5">
                            <div class="container py-5">
                                <div class="row align-items-center mb-5">
                                    <div class="col-lg-6 order-2 order-lg-1"><i class="fa-regular fa-hockey-sticks"></i>
                                        <h2 class="font-weight-light">Various Oppurtunities</h2>
                                        <p class="font-italic text-muted mb-4">Tournaments are URJA (A National level tournament in which IIT’s, NIT’s and other Technology Institutes are
                                            participated) , Inter Technology University competition , Thaparlympics (a Inter department sports
                                            competition) , SPADES (an Inter year sports competition), IGNITE (an Inter hostel sports competition),
                                            Annual Athletic Meet ( an inter Department Athletics competition) besides this competitions TIET’s students
                                            also participate in All India inter university tournaments as well in invitational tournaments organized by
                                            the different AIU and IITS.</p><a href="#"
                                                class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                                    </div>
                                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={ach1sp} alt=""
                                        class="img-fluid mb-4 mb-lg-0" id="photo_boyz"/></div>
                                </div>
                                <br></br><br></br>
                                    <div class="row align-items-center">
                                        <div class="col-lg-5 px-5 mx-auto"><img src={thapar} alt="" class="img-fluid mb-4 mb-lg-0" id="photo_thpp"/>
                                        </div>
                                        <div class="col-lg-6">
                                            <h2 class="font-weight-light">Motivation</h2>
                                            <p class="font-italic text-muted mb-4">In order to motivate the students and to get them interested in sports, a wonderful tradition being followed
                                                in the Institute that all newly admitted students at Thapar Institute are provided with a track suit and a
                                                T-shirt bearing the Institute logo. To organize and coordinate the sports activities TIET has full-fledged
                                                sports section as it has one Deputy Director Sports and seven full time coaches in different games to coach
                                                the students.</p><a href="#"
                                                    class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
}
