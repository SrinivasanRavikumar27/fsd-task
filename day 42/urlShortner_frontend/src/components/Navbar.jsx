import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/component/navbar.css';
import { useDispatch } from 'react-redux';

function Navbar() {

   // user is a state variable which holds the data of logged in user.
   const [user,setUser] = useState(null);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect( () => {

    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if(userData){
     setUser(userData.user);  
    }
   
   },[]);

    const padding = {
        padding: "20px",
        fontSize : '24px'
    };

    // logout function
const handleLogout = (e) => {

  // remove user data from session storage
  sessionStorage.removeItem('loggedInUser');

  // dispatch
  dispatch({type : "User-Logout"});

  // set data empty
  setProfileData("");

  // navigate to login page
  navigate('/login');

};

  return (
    <nav>

{
  user ? (
    user != 'null' ? (
      <div className='head-cont' >
       <div className='navbar' >
       <Link to='/dashBoard' style={padding} >DashBoard</Link>
        <Link to='/addUrl' style={padding} >Create Url</Link>
        <Link to='/viewUrl' style={padding} >View Url</Link>
       </div>
       <div className='profile'>
      
        <h5 >{`${user.fristName} ${user.lastName}`} </h5>
        <div className='flex-icon' >
<div className='d-flex align-items-center justify-content-center dropdown' >
<span >
<FontAwesomeIcon  icon={faUserCircle} /></span>
</div>
        </div>
              
<button 
      className='btn btn-danger btn-outline-dark text-white text-uppercase ml-2 mr-n2 ' 
      onClick={handleLogout}>Logout</button> 
                          
       </div>
           
        </div>
  ) : (
        <div>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/login' style={padding}>Login</Link>
        <Link to='/signup' style={padding}>Signup</Link>
        </div>
  )
  ) : (
    <div>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/login' style={padding}>Login</Link>
        <Link to='/signup' style={padding}>Signup</Link>
        </div>
  )
}

    </nav>
  )
}

export default Navbar