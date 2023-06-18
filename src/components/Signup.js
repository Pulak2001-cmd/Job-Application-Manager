import React, { useState } from 'react';
import '../style/Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../Url';

function Signup(props) {
  const navigate = useNavigate();
  const login = ()=> {
    navigate('/');
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const signup = async ()=> {
    console.log(BASE_URL);
    console.log(validateEmail(email))
    if (validateEmail(email) === false || validateEmail(email) === null) {
      errorMessage("Please enter a valid email address");
      return;
    }
    if (name === ""){
      errorMessage("Please enter your name");
      return;
    }
    if (password === ""){
      errorMessage("Please enter a valid password");
      return;
    }
    if(password.length <= 6){
      errorMessage("The minimum length of the password is 6 characters");
      return;
    }
    if(password !== password2){
      errorMessage("Password and Confirm Password do not match");
      return;
    }
    setLoading(true);
    const body = {
      name: name,
      email: email,
      password: password,
      username: email,
    }
    await axios.post(BASE_URL+'user/register/', body).then((response)=> {
      console.log(response.data);
      setLoading(false);
      successMessage("You have successfully registered");
    }).catch((error)=> {
      console.log(error.response.data);
      if(error.response.status === 400){
        setLoading(false);
        errorMessage("Your email ID is already registered. Please login.")
      }
    });
    setName("");
    setEmail("");
    setPassword("");
    setPassword2("");
  }
  const errorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
  const successMessage = (message) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  }
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="d-flex flex-lg-row align-items-center justify-content-center mt-5 flex-md-row flex-column">
        <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL+"/logo.png"} width="210px" height="100px" alt="Logo" /> 
            {error !== "" && <h5 className="text-danger">! {error}</h5>}
            {success !== "" && <h5 className="text-success">! {success}</h5>}
            {loading &&
              <div class="spinner-border text-success" role="status">
                {/* <span class="sr-only">Loading...</span> */}
              </div>
            }
            <h2 className="text-primary">Sign Up</h2>
            <div class="mb-3 mt-4">
                <label for="exampleFormControlInput4" class="form-label">Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} class="form-control input-email" id="exampleFormControlInput4" placeholder="Your Name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control input-email" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control input-email" id="exampleFormControlInput2" placeholder='Your Password' />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">Confirm Password</label>
                <input type="password" value={password2} onChange={(e) =>setPassword2(e.target.value)}class="form-control input-email" id="exampleFormControlInput3" placeholder='Confirm Your Password' />
            </div>
            <button type="button" className='btn btn-primary' onClick={signup}>Sign up</button>
            <button type="button" className='btn btn-outline-dark' onClick={login}>Already have an account? Login</button>
        </div>
        <div className='col-5 d-none d-lg-flex d-md-flex'>
            <img src={process.env.PUBLIC_URL+"/Interview.jpeg"} height="100%"/>
        </div>
      </div>
  )
}

export default Signup