import React from 'react'

function Assestsection() {
  return (
      
      <section id="assets" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>YOUR ASSESTS</h2>
          <p>Our greatest asset is the customer! Trear each customer as if they are the only one!</p>
        </div>

        <div className="row">

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="member">
              <img style={{width:"500px", height:"310px"}}  src="assets/img/remotesupport.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>24x7</h4>
                  <span>Remote Support</span>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <img style={{width:"500px", height:"310px"}}  src="assets/img/hardwaresetup.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Free</h4>
                  <span>Hardware and Setup</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <img style={{width:"500px", height:"310px"}}  src="assets/img/fees.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>₹0</h4>
                  <span>Initiation Fees</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <img style={{width:"500px", height:"310px"}} src="assets/img/inventory.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Inventory</h4>
                  <span>Maintain and Updates</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
   
  )
}

export default Assestsection
