import React from "react";
import {  Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  let location = useLocation();
  let navigate=useNavigate();
  React.useEffect(() => {
    //console.log(location.pathname);
  }, [location]);


  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{"backgroundColor":"#3AB4F2"}}>
        <div className="container-fluid" >
          {localStorage.getItem('token')?<Link className="navbar-brand" to="/Home">
        iNoteBook
          </Link>:<Link className="navbar-brand" to="/">
        iNoteBook
          </Link>}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               {localStorage.getItem('token')?<Link className={`nav-link ${location.pathname==="/Home"?"active":""}`} aria-current="page" to="/Home">
                  Home
                </Link>:<Link className={`nav-link ${location.pathname==="/Home"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>} 
                
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Contact"?"active":""}`} to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
            { location.pathname==="/"?<p></p>:!localStorage.getItem('token')  ?<form className="d-flex">
              <Link  className="btn btn-primary mx-2" to="/LogIn" role="button">LogIn</Link>
              <Link  className="btn btn-primary mx-2" to="/SignUp" role="button">SignUp</Link>
            </form>:<button  className="btn btn-primary mx-2" onClick={handleLogout}>LogOut</button>

            }
             
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
