import React from 'react';
import axios from 'axios';

function ContactUs() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (name && email && message) {
            try {
                const response = await axios.post('http://localhost:5000/api/contact', { name, email, message });
                alert(response.data);
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                alert('There was an error submitting the form.');
            }
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
            {/* <section className="w-full bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
                <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
                    <p className="text-lg">We'd love to hear from you</p>
                </div>
            </section> */}

            <section className="container mx-auto p-6 bg-white mt-8 rounded shadow-md w-11/12 md:w-2/3 lg:w-1/2">
                <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
                <p className="mb-4">If you have any questions, comments, or concerns, please don't hesitate to reach out. We are here to assist you and provide any information you may need.</p>

                <form onSubmit={handleSubmit} className="contact-form flex flex-col">
                    <input type="text" name="name" placeholder="Your Name" required className="p-2 mb-4 border border-gray-300 rounded"/>
                    <input type="email" name="email" placeholder="Your Email" required className="p-2 mb-4 border border-gray-300 rounded"/>
                    <textarea name="message" rows="5" placeholder="Your Message" required className="p-2 mb-4 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;
