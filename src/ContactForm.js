import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState (false);
    const [stateMessage, setStateMessage] = useState (null);

    const sendEmail = (e) => {
        e.persist ();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
        .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
            (result) => {
                setStateMessage('Message Sent');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage (null);
                }, 5000);
            },
            (error) => {
                setStateMessage ('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() =>{
                    setStateMessage (null);
                }, 5000);
            }
        );
        e.target.reset();
    };

  return (
    <>
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='user_name'/>
            <label>Email</label>
            <input type='email' name='user_mail'/>
            <label>Phoen Number</label>
            <input type='email' name='phone_number'/>
            <label>Subject</label>
            <input type='email' name='subject'/>
            <label>Message</label>
            <textarea type='text' name='message'/>
            <button type='submit' disabled={isSubmitting}>Submit</button>
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    </>
  )
}

export default ContactForm