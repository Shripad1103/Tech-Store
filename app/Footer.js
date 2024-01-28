import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='foot'  className=' flex items-center justify-center'>
        <div id="foot-part1">
				  <h4>Connect with us</h4>
				  <div id="foot-icon">
					<FaInstagram />
          <FaGithub />
          <FaFacebook />
				  </div>
			   </div>
         <div id='foot-part2'>
             <p>Thank you for visiting Trend Stores. Connect with us on social media and stay updated on the latest trends, promotions, and innovations. Your satisfaction is our priority, and we look forward to serving you again. Happy browsing!</p>
         </div>
      
     </div>
  )
}

export default Footer