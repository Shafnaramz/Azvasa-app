import React from "react";
import { useState ,useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Otp() {
  const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
  return (
    <div>
      <main>
        <div className="logo">
        < img src="images/forgot.jpg"/> 
        </div>
        <section>
        <h2 className="forgot-head">Enter your OTP</h2>
            <h6 className="verf">OTP will send  your Registerd Mobile No</h6>
  
            <form action="action_page.php" method="post">
            <div class="otp-container-input">
                  
                  <input type="text" placeholder="*"  name="email" required maxLength="1"/>
                  
                  <input type="text"  placeholder="*" name="email" required maxLength="1"/>
                  
                  <input type="text"  placeholder="*" name="email" required maxLength="1"/>
                  
                  <input type="text"  placeholder="*" name="email" required maxLength="1"/>
                  

                </div> 
               
            <div className="resend"> 
            <h4 >00:{counter}sec</h4>
           
                  <a href="#">Resend OTP</a>
                  </div>
            <div className="container-submit">             
                  
                  <Link to="/setup">      <button type="submit">SUBMIT</button></Link> 
                                 
                       </div>  

                      
                

               
                  
                  
                
              </form>

        </section>
      </main>
    </div>
  );
}

export default Otp;
