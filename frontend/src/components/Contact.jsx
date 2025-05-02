import React, { useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'
const Contact = ()=>{

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [subject , setSubject] = useState("")
  const [message , setMessage] = useState("")

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    await axios.post("https://event-planner-gk4i.onrender.com/api/v1/message/send", {name , email , subject , message},
    {
      withCredentials : true,
      headers :{"Content-Type": "Application/json"}
    }).then(res=>{
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }).catch(error=>{
      //console.log(error)
      toast.error(error.response.data.message)
    })

  }
  
    return(
      <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any Where , Any City</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us : +919934111163</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>sharifkne355@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19777.516859545787!2d76.70455658733228!3d30.71298227482362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee60515a29e5%3A0x3913d7d59e75c14d!2sPhase%205%2C%20Sector%2059%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1746115821321!5m2!1sen!2sin"
          style={{border: 0 , width: "100%" , height: "450px" }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
                <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                <textarea
                rows={10}
                 type="textarea" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                 <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      </>
    )
}

export default Contact;