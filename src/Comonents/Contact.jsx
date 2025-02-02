import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
         <div id="contact">
                <div className="container">
                    <div className="contact flex flex-col md:flex-row items-center">
                        <div className="contact-left">
                          <h1 className="sub-title">Contact Me</h1>
                          <p><i className="fa-solid fa-paper-plane"></i>grpansare2002@gmail.com</p>
                          <p><i className="fa-solid fa-square-phone"></i>7499661910</p>
                          <div className="social-icons">
                          <a href=""><i className="fa-brands fa-facebook"></i></a>
                          <a href=""><i className="fa-brands fa-twitter-square"></i></a>
                          <a href=""><i className="fa-brands fa-instagram"></i></a>
                          <a href=""><i className="fa-brands fa-linkedin"></i></a>
                           
                          </div>
                          <a href="My Resume.pdf" download className="btn btn-outline-danger btn2">Download Cv</a>
                        </div>
                        <div className="contact-right">
                               <form action="">
                                <input type="text" name="Name" id="" placeholder="Your name" required/>
                                <input type="email" name="email" id="" placeholder="enter email" required/>
                                  <textarea name="message" id=""  rows="6" placeholder="your message"></textarea>
                                  <button type="submit" className="btn btn-outline-danger btn2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           <div className="copyright">
            <p>copyright  © Ganesh Pansare</p>
           </div>
    </div>
  )
}

export default Contact