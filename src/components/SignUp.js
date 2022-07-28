import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = (props) => {

    let navigate=useNavigate();
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response=await fetch("https://infinite-dusk-34239.herokuapp.com/api/auth/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),
      });
      const json=await response.json();
      console.log(json);
      if(json.success) {
             localStorage.setItem('token',json.authToken);
              navigate("/Home");
              props.showAlert("Account created Successfully","success")
      }
      else{
          props.showAlert("User exists","danger")
      }
    };
    
    const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className="container mt-4" >
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
          />
        </div> */}
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
