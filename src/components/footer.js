import React from 'react'

function Footer() {
  return (
   
  <footer id="footer" >
  <div className="footer-top" >
    <div className="container" >
      <div className="row" >

        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>Rapid Ease Innovations</h3>
            <p>
             Gujarat, India<br /><br />
              <strong>Phone:</strong> +91 6355204179<br />
              <strong>Email:</strong> rapideaseinnovations@gmail.com<br />
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li> */}
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Payment Processing</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Ecommerce Integrations</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Multi-site Management</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Inventory System</a></li>
            {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
          </ul>
        </div>

        
        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subcribe our newsletter to receive the latest news and exclusive offers every week.</p>
          <form action="" method="post">
            <input type="email" name="email"/><input type="submit" value="Subscribe" />
          </form>

        </div>
        </div>

    </div>
  </div>

 
</footer>
  )
}

export default Footer
