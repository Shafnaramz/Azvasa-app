import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Update() {
  return (
    <div>
    <main>
        <div class="logo"><img src="data:image/png;base64,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" alt="img"/></div>
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