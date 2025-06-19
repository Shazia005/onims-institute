import React from 'react';
import { FaPhone } from 'react-icons/fa';
import logo1 from '../assets/img/logo1.png';
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            contactNo: e.target.contactNo.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Contact form submitted successfully');
            e.target.reset();
        } else {
            alert('Error submitting the form');
        }
    };

    return (
        <div>
            <section className="h-[30vh] flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/num.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="w-full lg:w-4/5 font-bold space-y-5 mt-10 ml-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#ffc600]">CONTACT US</h1>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-start p-4 bg-gray-100 min-h-screen justify-center mx-auto">
                <div className="flex flex-col lg:flex-row w-full">
                    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name*
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                className="border border-gray-300 p-2 w-full rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address*
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="border border-gray-300 p-2 w-full rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
                                Contact No.*
                            </label>
                            <input
                                id="contactNo"
                                type="tel"
                                name="contactNo"
                                className="border border-gray-300 p-2 w-full rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject*
                            </label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                className="border border-gray-300 p-2 w-full rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="border border-gray-300 p-2 w-full rounded"
                                rows="4"
                                required
                            />
                        </div>

                        <button
    type="button"
    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
    onClick={handleSubmit}
>
    Send
</button>
                    </form>

                    <div className="hidden lg:flex flex-col w-full lg:w-1/2 m-10">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6 mx-auto">
                            <div className="text-lg text-gray-700">
                                <div className="flex items-center space-x-4 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-geo-alt text-blue-500"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    <span>Canal Road Near Jhambra Bridge Mianwali</span>
                                </div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <FaPhone size={24} className="text-blue-500" />
                                    <span>92 309 88825-01-02-03</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <a
                                        href="mailto:support@care.com"
                                        className="flex items-center space-x-2 text-blue-500"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="bi bi-envelope"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                        <span>info@onims.edu.pk</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex w-full lg:w-2/3 m-10 rounded-lg mb-6 mx-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0837838652385!2d-122.41941828468162!3d37.77492927975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c3e4b09f3%3A0x6b004de776ec0e07!2sSan%20Francisco%2C%20CA%2094157%2C%20USA!5e0!3m2!1sen!2sin!4v1642075100665!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 flex justify-center items-center bg-white">
                <div className="flex flex-wrap justify-center gap-5">
                    <img src={logo1} alt="Logo 1" className="h-20 max-w-xs" />
                    <img src={logo2} alt="Logo 2" className="h-20 max-w-xs" />
                    <img src={logo3} alt="Logo 3" className="h-20 max-w-xs" />
                    <img src={logo4} alt="Logo 4" className="h-20 max-w-xs" />
                    <img src={logo5} alt="Logo 5" className="h-20 max-w-xs" />
                </div>
            </section>
        </div>
    );
};

export default Contact;
