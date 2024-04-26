import React from 'react'

function Aboutsection() {
  return (
   
       <section id="about" className="about">
       <div className="container">
 
         <div className="row">
           <div className="col-xl-6 col-lg-7" data-aos="fade-right">
             <img src="assets/img/aboutimage.jpg" className="img-fluid" alt="" />
           </div>
           <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
             <h3 data-aos="fade-up">Happy Customer, Happy Us.</h3>
             <p data-aos="fade-up">
              Revoultionize your sales process without breaking the bank. Our cutting-edge software is free to use, forever.
             </p>
             <div className="icon-box" data-aos="fade-up">
               <i className="bx bx-receipt"></i>
               <h4>Multi-store control</h4>
               <p>Management of multiple stores - to add inventory, reporting and store level details.</p>
             </div>
 
             <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
               <i className="bx bx-cube-alt"></i>
               <h4>Hardware Compatibility</h4>
               <p>Our POS system is compatible with all the hardware from different brands.</p>
             </div>
 
             <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
               <i className="bx bx-cube-alt"></i>
               <h4>Advanced Labeling</h4>
               <p>The ability for the POS System to handle advanced label requirements such as Supplier Information, Barcode printed on label and price for all products.</p>
             </div>
 
 
           </div>
         </div>
 
       </div>
     </section>
    
  )
}

export default Aboutsection
