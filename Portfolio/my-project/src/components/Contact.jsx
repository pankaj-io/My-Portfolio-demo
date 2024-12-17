import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // This function will handle the email sending process
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)

    // Use SMTP.js to send the email

    window.Email.send({
      SecureToken:'b98d33d6-c8f9-404f-9c31-5d9e9ceb3fa3',
      // Make sure this is secure in production
      To: 'pankaj.workdb@gmail.com', // Correct the email recipient
      From: email,
      Subject: 'New contact form enquiry',
      Body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    }).then((response) => {
      alert('Email sent successfully!');
      // Optionally, reset the form after submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }).catch((error) => {
      alert('Failed to send email: ' + error.message);
    });
  };



  // return (
  //   <>
  //     <div className="container items-center space-y-2 border border-cyan-800">
  //       <form onSubmit={sendEmail} className="space-x-2">
  //         <h3>Get in touch</h3>
  //         <input
  //           type="text"
  //           id="name"
  //           placeholder="Your Name"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //           required
  //         />
  //         <input
  //           type="email"
  //           id="email"
  //           placeholder="Your Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //         <input
  //           type="text"
  //           id="phone"
  //           placeholder="Your Phone"
  //           value={phone}
  //           onChange={(e) => setPhone(e.target.value)}
  //           required
  //         />
  //         <textarea
  //           id="message"
  //           rows="4"
  //           placeholder="How can we help you?"
  //           value={message}
  //           onChange={(e) => setMessage(e.target.value)}
  //           required
  //         ></textarea>
  //         <button type="submit">Send</button>
  //       </form>
  //     </div>

  //     {/* Include the SMTP.js library */}
  //     <script type="text/javascript" src="https://smtpjs.com/v3/smtp.js"></script>
  //   </>
  // );


  return (
    <>
         <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0">
            <div className="text-2xl md:text-4xl mt-4 md:mt-10 font-bold">Contact</div>
            <p className="text-md md:text-xl text-justify mt-4">Please, fill out this form to contact me.</p>
            <br />
            <div class="items-center mx-4 md:mx-60 border border-slate-950  rounded-lg  p-4 m-4 md:m-20 space-y-4">
            <label className="input input-bordered  input-primary flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Your name" />
                  </label>
                  <label className="input input-bordered input-primary flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="Your email" />
                  </label>
                  <label className="input input-bordered  input-primary flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Your message" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                  </label>
                  <label className="input input-bordered input-primary flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Your feedback" />
                    <span className="badge badge-info">Optional</span>
                  </label>
            </div>
        
        </div>
    </>
  )
}

export default Contact;
