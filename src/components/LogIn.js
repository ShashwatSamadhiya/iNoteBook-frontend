import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LogIn = (props) => {
  
    
    const [credentials,setCredentials]=useState({email:"",password:""});
    let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response=await fetch("https://infinite-dusk-34239.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });
    const json=await response.json();
    console.log(json);
    if(json.success) {
           localStorage.setItem('token',json.authToken);
            navigate("/Home");
            props.showAlert("Account LoggedIn Successfully","success")
    }
    else{
      props.showAlert("Invalid credentials","danger")
    }
  };
  
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
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
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
