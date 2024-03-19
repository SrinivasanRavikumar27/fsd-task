import React from 'react'
import authService from '../../services/authService';

function AccountActivation() {

    
    const handleActivate = async (e) => {
        e.preventDefault();

        // to get path from endpoints
        const path = window.location.pathname;

        // split the path  
        const splitPath = path.split('/'); 

        // get token and id from path of url
        let id = splitPath[2];
        let token = splitPath[3];

        // create payload 
        const payload = {
            id :  id,
            token:token
        };

        const response = await authService.activateAccount(payload);

        if(response){
            window.close();
        }

    };

  return (
    <div>
        <form>
            <h1>Account Activation</h1>
            
            <p>
             Note : Hi your account has created ,to activate your account please click on the activate button below .
            </p>
            <br/>
            <button onClick={handleActivate} >Activate Account</button>
        </form>
    </div>
  )
}

export default AccountActivation