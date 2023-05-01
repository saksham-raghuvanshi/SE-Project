import React, { useState } from 'react';
import "./CSS/Dashboard.css"
import logo_tsms from "../img/logo_tsms.png"



class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          equipment: "",
          studentName: "",
          isEquipmentIssued: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value,
        });
      }
    
      handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.equipment === "") {
          alert("Please select an equipment to issue");
          return;
        }
        if (this.state.isEquipmentIssued) {
          alert("You have already issued an equipment");
          return;
        }
        this.setState({
          isEquipmentIssued: true,
        });
        alert("Equipment issued successfully!");
      }

      render(){
  return (
    <div>
       <div class="container-fuild">
        <div class="topbar" id="topbar2">
            <div class="logo">
                <h2>Dashboard</h2>
            </div>
            {/* <div class="search">
                <input type="text" name="search" placeholder="Search here"/>
                <label for="search"><i class="fas fa-search"></i></label>
            </div> */}
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <i class="fas fa-bell"></i>
            </a>

            <div class="user" id="user">
                <img src={logo_tsms} alt="" id="img"/>
            </div>
        </div>
        <div class="row">
    <div class="col-sm">
        <div class="sidebar" id="sidebar">
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul>
                <li>
                    <a href="/dashboard">
                        <i class="fas fa-th-large"></i>
                        <div>Dashboard</div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i class="fa-solid fa-house"></i>
                        <div>Home</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <div>Activities</div>
                    </a>
                </li>
                <li>
                    <a href="/faculty">
                        <i class="fa-solid fa-user-tie"></i>
                        <div>Coaches</div>
                    </a>
                </li>
                <li>
                    <a href="/profile">
                        <i class="fas fa-cog"></i>
                        <div>Profile</div>
                    </a>
                </li>
                <li>
                    <a href="/contact-us">
                        <i class="fa-solid fa-phone"></i>
                        <div>Contact Us</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-user"></i>
                        <div>Logout</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>




            
            <div class="col">
                <div class="main" id="main">
                    <div class="cards" id="cards">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <div class="card" id="card">
                                <div class="card-content">
                                    <div class="number">1217</div>
                                    <div class="card-name">Total Items</div>
                                    <br/>
                                </div>
                                <div class="icon-box">
                                    <i class="fa-solid fa-baseball-bat-ball"></i>
                                </div>
                            </div>
                        </a>
                        <div class="card" id="card">
                            <div class="card-content">
                                <div class="number">42</div>
                                <div class="card-name">At hold</div>
                            </div>
                            <br/>
                            <div class="icon-box">
                                <i class="fa-solid fa-hand"></i>
                            </div>
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <div class="card" id="card">
                                <div class="card-content">
                                    <div class="number">1140</div>
                                    <div class="card-name">Availible Now</div>
                                </div>
                                <br/>
                                <div class="icon-box">
                                    <i class="fas fa-users"></i>
                                </div>
                            </div>
                        </a>
                        <div class="card" id="card">
                            <div class="card-content">
                                <div class="number">₹0</div>
                                <div class="card-name">Fine</div>
                            </div>
                            <br/>
                            <div class="icon-box">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                    <div class="charts">
                        <div class="chart">
                            <h2><b>Book Items</b></h2>
                            <hr/>
                            <div>
                                <canvas id="lineChart"></canvas>
                                <div>
        <h2>Equipment Issue Form</h2>
        <form onSubmit={this.handleFormSubmit} id="form1">
          <div>
            <label htmlFor="equipment">Select an equipment to issue:</label>
            <select
              id="equipment"
              name="equipment"
              value={this.state.equipment}
              onChange={this.handleInputChange}
            >
              <option value="">Select an equipment</option>
              <option value="Football">Football</option>
              <option value="Bat">Bat</option>
              <option value="Ball">Ball</option>
              <option value="Basketball">Basketball</option>
            </select>
          </div>
          <div>
            <label htmlFor="studentName">Enter your name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={this.state.studentName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Issue Equipment</button>
          </div>
        </form>
      </div>
                                       </div>
                        </div>
                        {/* <div class="chart doughnut-chart">
                            <h2><b>Swimming Pool Entry</b></h2>
                            <hr/>
                            <div class="col border-right">
                                <div class="p-3 py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right"><b>Please fill the form</b></h4>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6"><label class="labels">Name</label><input type="text"
                                                class="form-control" placeholder="First name" /></div>
                                        <div class="col-md-6"><label class="labels">Last Name</label><input type="text"
                                                class="form-control"  placeholder="Last Name"/></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-12"><label class="labels">Thapar Roll No.</label><input
                                                type="text" class="form-control" placeholder="Roll No." 
                                                disabled/></div> <br/>
                                        <div class="col-md-12"><label class="labels">Hostel Residing
                                                Currently</label><input type="text" class="form-control"
                                                placeholder="Hostel"  disabled/></div> <br/>
                                        <div class="col-md-12"><label class="labels">Hostel Room No</label><input
                                                type="text" class="form-control" placeholder="Room No." 
                                                disabled/></div> <br/>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12"><label class="labels">AGE</label><input type="text"
                                                class="form-control" placeholder="e.g. 21" /></div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Email</label><input
                                                    type="email" class="form-control" placeholder="Enter your Email"
                                                    /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Mobile Number</label><input
                                                    type="text" class="form-control" placeholder="Enter phone number"
                                                    /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Stream of
                                                    Education</label><input type="text" class="form-control"
                                                    placeholder="Education" /></div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button"
                                                type="button">Submit</button></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


<div class="chart doughnut-chart">
    <h2><b>Swimming Pool Entry</b></h2>
    <hr/>
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <h4 class="text-right mb-3"><b>Please fill the form</b></h4>
                <div class="form-group">
                    <label class="labels">Name</label>
                    <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div class="form-group">
                    <label class="labels">Last Name</label>
                    <input type="text" class="form-control"  placeholder="Last Name"/>
                </div>
                <div class="form-group">
                    <label class="labels">Thapar Roll No.</label>
                    <input type="text" class="form-control" placeholder="Roll No." disabled/>
                </div>
                <div class="form-group">
                    <label class="labels">Hostel Residing Currently</label>
                    <input type="text" class="form-control" placeholder="Hostel" disabled/>
                </div>
                <div class="form-group">
                    <label class="labels">Hostel Room No</label>
                    <input type="text" class="form-control" placeholder="Room No." disabled/>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-5">
                {/* <div class="form-group">
                    <label class="labels">AGE</label>
                    <input type="text" class="form-control" placeholder="e.g. 21" />
                </div> */}
                <div class="form-group">
                    <label class="labels">Email</label>
                    <input type="email" class="form-control" placeholder="Enter your Email" />
                </div>
                <div class="form-group">
                    <label class="labels">Mobile Number</label>
                    <input type="text" class="form-control" placeholder="Enter phone number" />
                </div>
                <div class="form-group">
                    <label class="labels">Stream of Education</label>
                    <input type="text" class="form-control" placeholder="Education" />
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 text-center">
                        <button class="btn btn-primary profile-button" type="button">Submit</button>
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

        



        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">Total items Listed</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S, No.</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Items Count</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>

                                </tr>
                            </tbody>
                        </table>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">Notifications</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">

                            <div class="col">
                                The institute has several well-maintained playgrounds and International standard
                                synthetic
                                athletic track, synthetic tennis court synthetic Basketball court and Synthetic
                                Badminton
                                indoor court to encourage the students to take part in different games such as Cricket,
                                Hockey, Football, Basketball, Volleyball, Table Tennis Lawn Tennis and Badminton.
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">Total items Listed</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S, No.</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity Availible</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>

                                </tr>
                            </tbody>
                        </table>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



    
    </div>
    
   
  )
}
}

export default dashboard