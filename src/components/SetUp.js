import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function SetUp() {
  return (
    <div>
    <main>
        <div class="logo"> < img src="images/forgot.jpg"/> </div>
        <section>
        <h2 className="forgot-head">Setup New password</h2>
            <h6 className="verf">For sampleemail@gmail.com</h6>

            <form action="action_page.php" method="post">
                
                <div class="container-input">
                  
                  <input type="password"  name="password" required/>
                  <label for="uname"><b>New Password</b></label>
                  {/* <i className="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i> */}
                  <i class="bi bi-eye-slash" id="togglePassword"></i>
                </div>  
                <div class="container-input">
                  
                  <input type="password"  name="password" required/>
                  <label for="password"><b>Confirm Password</b></label>

                </div>  
                
                 <div class="container-submit">             
                    
                  <Link to="/update">  <button type="submit">SET PASSWORD</button></Link>
                            
                  </div>    
                
                  
                  
                
              </form>
        </section>
    </main>       
    </div>
  )
}

export default SetUp