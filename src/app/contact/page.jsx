import React from 'react';

const ContactPage = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
                
                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Have a question or want to work together?  
                        Feel free to reach out to us.
                    </p>

                    <ul className="space-y-2">
                        <li> Email: support@example.com</li>
                        <li> Phone: +880 1234-567890</li>
                        <li> Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form className="bg-base-100 shadow rounded-lg p-6 space-y-4">
                    <div>
                        <label className="label">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">Message</label>
                        <textarea
                            placeholder="Your message"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                        ></textarea>
                    </div>

                    <button className="btn btn-primary w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactPage;