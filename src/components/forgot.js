import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function login() {
  return (
   <div>
      
      <main>
        <div className="logo">
          < img src="../images/Assets/Forgot Password.png"/> 
           </div>    
        <section>
            <h2 className="forgot-head">Forgot Password</h2>
            <h6 className="verf">Enter your Registerd Email/Mobile No</h6>
           

            <form action="action_page.php" method="post">
            {/* <div class="container-submit">  */}

            <label>
           <input type="radio"  name="radio" />
                        <span>Email</span>
                    </label>
                    <label>
                    <Link to="/forgotmob"> <input type="radio"  name="radio" /></Link>
                        <span> Mobile</span>
                    </label>            
                  
               {/* <input type="radio" className="radiocheck" name="mob" value="male"/> Mobile>
                
                    <input type="radio"  className="radio" name="em" value="male"/> Email */}
                   
                            
                  {/* </div>     */}
                
              


                <div className="container-input">
                  
                  <input type="text"  name="uname" required/>
                  <label for="uname"><b>Email</b></label>

                </div>  
                
                 <div className="container-submit">             
                  
             <Link to="/otp">      <button type="submit">Send</button></Link> 
                            
                  </div>    
                
                  
                 
                
              </form>
        </section>
    </main> 
      </div>
  );
}

export default login;
