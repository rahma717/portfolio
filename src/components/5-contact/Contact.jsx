import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contactme.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkrngze");

  return(
    <section id="contacts" className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope'><i className="fa-solid fa-envelope"></i></span>
        contactez-moi pour plus d&#39;informations...
      </h1>
    <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} >
          <div className='flex justify-between' style={{marginTop: "4rem"}}>
            <label htmlFor='name'>Your name:</label>
            <input autoComplete='off' required type='text' name='name' id='name' placeholder='Your name'/>
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className='flex justify-between' style={{marginTop: "24px"}}>
            <label htmlFor='email'>Your Email:</label>
            <input autoComplete='off' required type='email' name='email' id='email' placeholder='Your Email'/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className='flex justify-between' style={{marginTop: "24px"}}>
            <label htmlFor='message'>Your message:</label>
            <textarea required name='message' id='message' placeholder='Your message'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting ? "submitting . . ." : "submit"}
          </button>
          {state.succeeded && (
            <p className="flex" style={{fontSize: "18px", marginTop: "1.7rem"}}>
              Your message has been sent successfully
              <Lottie loop={false} style={{height : 45}} animationData={doneAnimation} />
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie className='contact-animation' style={{height : 380}} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;