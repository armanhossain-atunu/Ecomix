import React from 'react';

const AboutPage = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>

            <p className="text-gray-600 mb-4">
                We are passionate about building modern, fast, and user-friendly web applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-5 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p>
                        Deliver high-quality digital solutions that create real value.
                    </p>
                </div>

                <div className="p-5 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p>
                        To become a trusted technology partner worldwide.
                    </p>
                </div>

                <div className="p-5 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p>
                        Quality, transparency, and continuous improvement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;