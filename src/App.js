import React from "react";
import { useState } from "react";
import './App.css'
const list=()=>{
return(
  <div className="login-form">
<div className="form">
  <div className="col-lg-4 form_border">
  <h3>Login form</h3>
  <div>
  <input placeholder="Username,Useremail,Phonenumber" />
  </div>
  <div>
  <input placeholder="Password"/>
  </div>
  <div>
  <button type="Submit" className="btn btn-primary">Submit</button>
  </div>
  <div className="forget_create">
  <p>Forget Password? </p>
  <p className="or">or </p>
  <p>Create Account</p>
  </div>
  </div>
</div>
  </div>
)
}
export default list