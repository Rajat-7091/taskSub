import React from 'react'
import Footer from './Footer'
import Navbars from './Navbars'

function Contactus() {
  return (
    <>
    <Navbars/>
    {/* // <!--==============================================================CONTACT FORM START====================================================--> */}
   <section class=" form-section ml-5 center ml-5" id="contact">
   <div class="container text-center ">
       <h1 class="text-center mb-3">Contact Us</h1>
       <div class="row ml-5">
           <div class="col-md-6 ml-5">
               <form class="contact__input">
                   <div class="form-row">
                       <div class="form-group col-md-6">
                           <input type="text" id="name" name="name" class="form-control"
                               placeholder="Full Name"/>
                       </div>
                       <div class="form-group col-md-6">
                           <input type="email" id="email" name="email" class="form-control"
                               placeholder="Email"/>
                       </div>
                   </div>
                   <div class="form-row">
                       <div class="form-group col-md-12">
                           <input type="text" id="sub" name="sub" class="form-control" placeholder="Phone"/>
                       </div>
                   </div>
                   <div class="form-row">
                       <div class="form-group col-md-12">
                           <textarea name="desc" id="desc" class="form-control"></textarea>
                       </div>
                   </div>
                   <div class="form-row">
                       <div class="form-group col-md-12 text-centre">
                           <button class="btn btn-primary"><i class="fas fa-paper-plane"></i>Send
                               message</button>
                       </div>
                   </div>
               </form>

           </div>
       </div>
   </div>
</section>
<Footer/>
    </>
   
  )
}

export default Contactus