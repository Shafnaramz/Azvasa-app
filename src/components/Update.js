import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Update() {
  return (
    <div>
    <main>
        <div class="logo"><img src="../images/Assets/Password Updated.png"/></div>
        <section>
        <h2 className="forgot-head">password Updated!</h2>
            <h6 className="verf">Your password has been changed successfully Use your new password to log in.</h6>

            {/* <form action="action_page.php" method="post"> */}
                
               
                 <div class="container-submit">             
                    
                  <Link to="/">  <button type="submit">LOGIN</button></Link>
                            
                  </div>    
                
                  
                  
                
              {/* </form> */}
        </section>
    </main>       
    </div>
  )
}

export default Update