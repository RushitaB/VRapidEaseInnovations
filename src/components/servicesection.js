import React from 'react'

function Servicesection() {
  return (
  
   <section id="services" className="features">
   
   <div className="container">
   {/* <h2 >Our Services</h2> */}
   <br/>
     <div className="row">
       <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
         <ul className="nav nav-tabs flex-column">
           <li className="nav-item">
             <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
               <h4>Online Store Integrations</h4>
               <p>Integrate eCommerce and inventories seamlessly, providing automatic synchronization.</p>
             </a>
           </li>
           <li className="nav-item mt-2">
             <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
               <h4>Franchise Management</h4>
               <p>Our POS system will help you save time and improve the operation of your retail franchises. </p>
             </a>
           </li>
           <li className="nav-item mt-2">
             <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
               <h4>Merchant Services</h4>
               <p> With our automated system, you may enjoy smooth operations. Simply process payments, and we'll do the rest. </p>
             </a>
           </li>
           <li className="nav-item mt-2">
             <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
               <h4>Our In-house API</h4>
               <p>We have a specialized network of qualified developers who are ready to design custom software solutions if your specific requirements have not already been met. </p>
             </a>
           </li>
         </ul>
       </div>
       <div className="col-lg-7 ml-auto" data-aos="fade-left">
         <div className="tab-content">
           <div className="tab-pane active show" id="tab-1">
             <figure>
               <img style={{width:"480px", height:"480px"}} src="assets/img/onlinestore.png" alt="" className="img-fluid" />
             </figure>
           </div>
           <div className="tab-pane" id="tab-2">
             <figure>
               <img style={{width:"480px", height:"480px"}} src="assets/img/franchise.jpg" alt="" className="img-fluid" />
             </figure>
           </div>
           <div className="tab-pane" id="tab-3">
             <figure>
               <img style={{width:"480px", height:"480px"}} src="assets/img/merchant.jpg" alt="" className="img-fluid" />
             </figure>
           </div>
           <div className="tab-pane" id="tab-4">
             <figure>
               <img style={{width:"480px", height:"480px"}} src="assets/img/inhouse.jpg" alt="" className="img-fluid" />
             </figure>
           </div>
         </div>
       </div>
     </div>

   </div>
 </section>

  )
}

export default Servicesection
