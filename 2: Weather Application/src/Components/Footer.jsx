import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>
              Designed By :{" "}
            <b>
              <i>Syed Ali</i>
            </b>
          </p>
          
        </div>
      </footer>
    </div>
  )
}
export default Footer
