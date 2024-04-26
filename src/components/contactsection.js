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
               <p>Gujarat, India</p>
             </div>

             <div className="email mt-4">
               <i className="bi bi-envelope"></i>
               <h4>Email:</h4>
               <p>rapideaseinnovations@gmail.com</p>
             </div>

             <div className="phone mt-4">
               <i className="bi bi-phone"></i>
               <h4>Call:</h4>
               <p>+91 6355204179</p>
             </div>

           </div>

         </div>

         <div className="col-lg-5 d-flex align-items-stretch">
         {/*  */}
           <iframe style={{border:"0", width: "100%", height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
         </div>

       </div>

     </div>
   </section>
 
  )
}

export default Contactsection
