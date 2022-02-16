import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function login() {
  return (
    <div>
    <main>
        <div class="logo"><img src="../images/Assets/Azvasa_logo.png"/></div>
        
        <section>
            <h1>Welcome to Azvasa!</h1>
            <h6>Login to the account</h6>
            <form action="action_page.php" className="form-title" method="post">
            <div class="user-icon ">
            <img src="../images/Assets/Login_element01.png"/>
      </div>
      <div class="plus-icon ">
            <img src="../images/Assets/Login_element04.png"/>
      </div>
                
                <div class="container-input">
                  
                  <input type="text"  name="uname" required/>
                  <label for="uname"><b>Username</b></label>

                </div>  
                <div class="container-input">
                  
                  <input type="text"  name="uname" required/>
                  <label for="uname"><b>Password</b></label>

                </div>  
                
                 <div class="container-submit">             
                    <input type="checkbox"  name="remember"/> 
                    <h6> Remember me</h6>
                 <Link to="/dashboard">   <button type="submit">Login</button> </Link>
                            
                  </div>    
                
                  
                  <div class="psw"> 
                 <Link to="forgot">   <a href="#">Forgotpassword?</a></Link>
                  </div>
                
              </form>
        </section>
    </main>   
    </div>
  );
}

export default login;
