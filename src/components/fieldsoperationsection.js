import React from 'react'

function Fieldsoperationsection() {
  return (
   
     <section id="operations" className="services section-bg">
     <div className="container">

       <div className="section-title" data-aos="fade-up">
         <h2>FIELDS OF OPERATION</h2>
         <p>Take your business to an advanced level with Pos systems. Making payments with Pos simply smart.</p>
       </div>

       <div className="row">
         <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
           <div className="icon-box icon-box-pink">
             {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> */}
             <img style={{width:"500px", height:"200px"}}  src="assets/img/conviencestore.jpg" alt="" className="img-fluid" />
             <h4 style={{marginTop:"10px"}} className="title"><a href="">Convenience Store</a></h4>
             <p className="description">POS systems are built around being able to efficiently and quickly process customer purchases</p>
           </div>
         </div>

         <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
           <div className="icon-box icon-box-cyan">
           <img style={{width:"500px", height:"200px"}}  src="assets/img/supermarkets.jpg" alt="" className="img-fluid" />
             {/* <div className="icon"><img className="bx bx-file" src="assets/img/franchise.jpg"></img></div> */}
             <h4 style={{marginTop:"10px"}} className="title"><a href="">Supermarkets</a></h4>
             <p className="description">Grow Sales with Flexible Grocery Promotions</p>
           </div>
         </div>

         <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
           <div className="icon-box icon-box-green">
             {/* <div className="icon"><i className="bx bx-tachometer"></i></div> */}
             <img  style={{width:"500px", height:"200px"}}  src="assets/img/tableservice.jpg" alt="" className="img-fluid" />
             <h4 style={{marginTop:"10px"}} className="title"><a href="">Table service restaurant</a></h4>
             <p className="description">An enhanced user interface and streamlined payment portal experience</p>
           </div>
         </div>

         <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
           <div className="icon-box icon-box-blue">
             {/* <div className="icon"><i className="bx bx-world"></i></div> */}
             <img style={{width:"500px", height:"200px"}}   src="assets/img/quickservice.webp" alt="" className="img-fluid" />
             <h4 style={{marginTop:"10px"}} className="title"><a href="">Quick service restaurant </a></h4>
             <p className="description">Deliver a seamless unified payment experience.</p>
           </div>
         </div>

       </div>

     </div>
   </section>
  
  )
}

export default Fieldsoperationsection
