import React from 'react'

function Contactsection() {
  return (
     
     <section id="contact" className="contact">
     <div className="container">

       <div className="section-title" data-aos="fade-up">
         <h2>Contact</h2>
         <p>Contact Us, Our Team Is Waiting For The Opportunity.</p>
       </div>

       <div className="row no-gutters justify-content-center" data-aos="fade-up">

         <div className="col-lg-5 d-flex align-items-stretch">
           <div className="info">
             <div className="address">
               <i className="bi bi-geo-alt"></i>
               <h4>Location:</h4>
               <p>India</p>
             </div>

             <div className="email mt-4">
               <i className="bi bi-envelope"></i>
               <h4>Email:</h4>
               <p>info@rapideaseinnovations.com</p>
             </div>

             {/* <div className="phone mt-4">
               <i className="bi bi-phone"></i>
               <h4>Call:</h4>
               <p>+91 6355204179</p>
             </div> */}

           </div>

         </div>

         <div className="col-lg-5 d-flex align-items-stretch">
         {/*  */}
           <iframe style={{border:"0", width: "100%", height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281523.952038161!2d72.10863842602201!3d20.75724541214978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716988043612!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
         </div>

       </div>

     </div>
   </section>
 
  )
}

export default Contactsection
