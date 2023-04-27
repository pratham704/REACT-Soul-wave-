
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function FormJoin() {
 
    const form = useRef();



// emailjs.sendForm('gmail', 'template_lzi9i4b', form.current, 'mvPwK1we7fzoLKEeq')
// .then((result) => {
//     console.log(result.text);
// }, (error) => {
//     console.log(error.text);
// });
// e.target.reset()


// }

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q4zwcmb', 'template_lzi9i4b', form.current, 'mvPwK1we7fzoLKEeq')
      .then((result) => {
          console.log(result.text);
          alert("Thank you , Keep Supporting ")
      }, (error) => {
          console.log(error.text);
      });
  };









  return (



   <>


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


<form action="#" class="contact-form"   ref={form} onSubmit={sendEmail} 
    >
      <h5 class="title">Join us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name"  name="firstname"        placeholder="Firstname" required/>
      </div>
      
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name"    name="lastname"          placeholder="Lastname" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input"        name="email"       placeholder="Email" required    />
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" name="email" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send" />
      </div>
    </form>




{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="firstname" />
      
      
       <label>Namelast</label>
      <input type="text" name="lastname" />

      <label>Email</label>
      <input type="email" name="email" />
     

      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}



    
   {/* <div class="container">
        <div class=" text-center mt-5 ">

                
            
        </div>

    
    <div class="row bg-secondary ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
            <div class="card-body bg-light">
       
            <div class = "container">
            <form id="contact-form" >

            

            <div class="controls">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name"> *Firstname</label>
                            <input id="form_name" type="text" name="firstname" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
                        </div>

                        <br />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Lastname *</label>
                            <input id="form_lastname" type="text" name="lastname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                                            </div>
                                                            <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                            
                        </div>
                        <br />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need">Please specify your need *</label>
                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                <option value="" selected disabled>Select</option>
                                <option >Request Invoice for order</option>
                                <option >Request order status</option>
                                <option >Haven't received cashback yet</option>
                                <option >Other</option>
                            </select>
                            
                        </div>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="form_message">Message *</label>
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>


                    <div class="col-md-12">
                        
                    


                                <button class="btn btn-success btn-send  pt-2 btn-block " onClick={Send}> Join</button>
                     
                    
                </div>
          
                </div>


        </div>
         </form>
        </div>
            </div>


    </div>

    </div>

</div>
</div> */}

    
    
    
   
   </>
  )
}
