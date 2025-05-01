import React from "react";
import { useState } from "react";
const Footer = ()=>{
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed email:", email);
      setEmail(""); // Clear input after submission
    }
  };

    return(
      <footer>
        <div className="banner">
          <div className="title">
            <h1>
              KING'S
            </h1>
            <p>Events and Weedings</p>
          </div>
          <div className="tag">
            <label>NewsLetter</label>
            <div>
              <input type="text" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)} />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            <p>Sign Up with your mail address to get mails and updates</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;