import React, { useState } from 'react';
import authService from '../../services/authService';
import { useDispatch } from 'react-redux';

function ChangePassword() {

    const [passwordData,setPasswordData] = useState({
        newPassword : "",
        confirmPassword : ""
    });

    const dispatch = useDispatch();
    
// change password function
    const handleChangePassword = async (e) => {

        e.preventDefault();

        // Get the path from the URL
const path = window.location.pathname;

// Split the path by '/'
const pathParts = path.split('/');

// The id is the second part (index 1) and the token is the third part (index 2)
const id = pathParts[2];

const token =pathParts[3];

const config = {
    headers : {
      'Authorization' : `Bearer ${token}`
    }
  };

const payload = {
    newPassword : passwordData.newPassword,
    confirmPassword : passwordData.confirmPassword,
    userid : id
}

    const response = await authService.updatePassword(payload,config);

    console.log(response);

    if(response){

       dispatch({type : 'Update-Password', payload: response.user});

       setPasswordData({
           newPassword : "",
       confirmPassword : ""
       });

       window.close();

    }

    };

  return (
    <div>

        <form onSubmit={handleChangePassword}>

        <h1>Update Password</h1>

            <label htmlFor="oldpass">New Password:</label>
            <input type="password" id="newpass" name="newpass"  placeholder='enter new password...' required 
            value={passwordData.newPassword} 
            onChange={e => setPasswordData({...passwordData,newPassword : e.target.value})} /><br />

            <label htmlFor="newpass">Confirm New Password:</label>
            <input type="password" id="confirmNewPass" name="confirmNewPass" placeholder='re-enter new password...' 
            required value={passwordData.confirmPassword} 
            onChange={e => setPasswordData({...passwordData,confirmPassword : e.target.value})} /><br />

            <button type="submit">Change Password</button>
        </form>
    </div>
  )
}

export default ChangePassword