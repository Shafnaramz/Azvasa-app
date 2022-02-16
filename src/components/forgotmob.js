import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Otp() {
  return (
    <div>
        
 <main>
        <div className="logo">
          < img src="images/forgot.jpg"/> 
           </div>    
        <section>
            <h2 className="forgot-head">Forgot Password</h2>
            <h6 className="verf">Enter your Registerd Email/Mobile No</h6>
           
            <form action="action_page.php" method="post">
            <label>
            <input type="radio"  name="radio" />
                        <span>Email</span>
                    </label>
                    <label>
                    <Link to="/forgot"> <input type="radio"  name="radio" /></Link>
                        <span> Mobile</span>
                    </label>     
               
                <div className="container-input">
                  
                  <input type="number"  name="uname" required/>
                  <label for="uname"><b>Mobile</b></label>

                </div>  
                
                 <div className="container-submit">             
                  
             <Link to="/otp">      <button type="submit">Send</button></Link> 
                            
                  </div>    
                
                  
                 
                
              </form>
        </section>
    </main> 
    </div>
  )
}

export default Otp