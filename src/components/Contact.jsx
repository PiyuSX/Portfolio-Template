import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Add your EmailJS configuration here
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('Message sent successfully');
        form.current.reset();
      }, (error) => {
        console.log('Failed to send message');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0c1f3a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Get In Touch
        </h2>
        
        <div className="max-w-lg mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg border dark:bg-[#162a46] dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg border dark:bg-[#162a46] dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border dark:bg-[#162a46] dark:border-gray-700 dark:text-white"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;