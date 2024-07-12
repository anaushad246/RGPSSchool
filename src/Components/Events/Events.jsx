import React from 'react'

function Events() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const ticket = event.target.ticket.value;

        if (name && email && ticket) {
            alert(`Thank you for registering, ${name}! You have selected the ${ticket} ticket.`);
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div>
            <section className="hero">
                <img src="hero.jpg" alt="Tech Innovators Conference" className="w-full h-auto" />
            </section>

            <section className="event-details p-6">
                <h2 className="text-3xl">Event Details</h2>
                <p className="mb-4">Join us for the annual Tech Innovators Conference, where industry leaders and cutting-edge startups come together to share insights, showcase new technologies, and network with like-minded professionals.</p>
                <h3 className="text-2xl">Schedule</h3>
                <ul className="list-none pl-0">
                    <li className="mb-2"><strong>Day 1:</strong> Keynote Speeches, Panel Discussions</li>
                    <li className="mb-2"><strong>Day 2:</strong> Workshops, Networking Events</li>
                    <li className="mb-2"><strong>Day 3:</strong> Product Demos, Closing Ceremony</li>
                </ul>
                <h3 className="text-2xl mt-4">Speakers/Performers</h3>
                <ul className="list-none pl-0">
                    <li className="mb-2"><strong>Jane Doe:</strong> CEO of TechCorp</li>
                    <li className="mb-2"><strong>John Smith:</strong> Founder of InnovateX</li>
                    <li className="mb-2"><strong>Emily Johnson:</strong> AI Researcher at FutureLabs</li>
                </ul>
                <h3 className="text-2xl mt-4">Activities</h3>
                <ul className="list-none pl-0">
                    <li className="mb-2"><strong>Workshop:</strong> AI and Machine Learning (10:00 AM - 12:00 PM)</li>
                    <li className="mb-2"><strong>Networking Lunch:</strong> Meet and Greet with Industry Leaders (12:30 PM - 2:00 PM)</li>
                    <li className="mb-2"><strong>Demo Session:</strong> Hands-on with the Latest Gadgets (3:00 PM - 5:00 PM)</li>
                </ul>
            </section>

            <section className="registration p-6">
                <h2 className="text-3xl">Register Now</h2>
                <form id="registration-form" onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto">
                    <label htmlFor="name" className="mt-2">Name:</label>
                    <input type="text" id="name" name="name" required className="mt-1 p-2 border rounded"/>

                    <label htmlFor="email" className="mt-2">Email:</label>
                    <input type="email" id="email" name="email" required className="mt-1 p-2 border rounded"/>

                    <label htmlFor="ticket" className="mt-2">Ticket Type:</label>
                    <select id="ticket" name="ticket" required className="mt-1 p-2 border rounded">
                        <option value="general">General Admission - $199</option>
                        <option value="vip">VIP Pass - $499</option>
                        <option value="student">Student Pass - $99</option>
                    </select>

                    <button type="submit" className="mt-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-600">Register</button>
                </form>
            </section>

            <section className="faq p-6">
                <h2 className="text-3xl">FAQs</h2>
                <p className="mb-2"><strong>What is the dress code?</strong> Business casual is recommended.</p>
                <p className="mb-2"><strong>Can I transfer my ticket?</strong> Yes, tickets are transferable up to 48 hours before the event.</p>
            </section>

            <section className="contact p-6">
                <h2 className="text-3xl">Contact Us</h2>
                <p>Email: <a href="mailto:info@techinnovators.com" className="text-blue-500">info@techinnovators.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>Follow us on social media:</p>
                <ul className="social-media list-none flex justify-center p-0">
                    <li className="mx-2"><a href="#" className="text-blue-500">Facebook</a></li>
                    <li className="mx-2"><a href="#" className="text-blue-500">Twitter</a></li>
                    <li className="mx-2"><a href="#" className="text-blue-500">LinkedIn</a></li>
                </ul>
            </section>
        </div>
    );

};

export default Events