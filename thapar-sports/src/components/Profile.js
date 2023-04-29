import React from 'react'
import "./CSS/Profile.css"
import profile from "../img/profile.jpg"


 

export default function Profile() {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5"
                        width="150px" src={profile} /><span className="font-weight-bold">Name</span><span
                            className="text-black-50">example@mail.com</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right"><b>Profile Settings</b></h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control"
                                placeholder="First name" /></div>
                            <div className="col-md-6"><label className="labels">Last Name</label><input type="text"
                                className="form-control" placeholder="Last Name" /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Email</label><input type="email"
                                className="form-control" placeholder="Enter your Email"  /></div>
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text"
                                className="form-control" placeholder="Enter phone number"  /></div>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text"
                                className="form-control" placeholder="Enter address line 1"  /></div>
                            <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text"
                                className="form-control" placeholder="Enter address line 2"  /></div>
                            <div className="col-md-12"><label className="labels">Postcode</label><input type="text"
                                className="form-control" placeholder="PostalCode"  /></div>
                            <div className="col-md-12"><label className="labels">State</label><input type="text"
                                className="form-control" placeholder="Enter address line 2"  /></div>
                            <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control"
                                placeholder="Enter address line 2"  /></div>
                            <div className="col-md-12"><label className="labels">Stream of Education</label><input type="text"
                                className="form-control" placeholder="Education"  /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6"><label className="labels">Country</label><input type="text"
                                className="form-control" placeholder="country"  /></div>
                            <div className="col-md-6"><label className="labels">State/Region</label><input type="text"
                                className="form-control"  placeholder="state" /></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save
                            Profile</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience"><span><b>More
                            Information (Not editable)</b></span></div><br></br>
                        <div className="col-md-12"><label className="labels">Thapar Roll No.</label><input type="text"
                            className="form-control" placeholder="Roll No."  disabled /></div> <br></br>
                        <div className="col-md-12"><label className="labels">Hostel Residing Currently</label><input type="text"
                            className="form-control" placeholder="Hostel"  disabled /></div> <br></br>
                        <div className="col-md-12"><label className="labels">Hostel Room No</label><input type="text"
                            className="form-control" placeholder="Room No."  disabled /></div> <br></br>
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text"
                            className="form-control" placeholder="Additional details"  /></div>

                            
                    </div>
                </div>
            </div>
        </div>

  )
}
