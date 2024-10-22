import React, { useState } from 'react'
import '../contact/contact.css'

function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // You can handle the form submission logic here (e.g., send data to the server)
    };


    return (
        <>
            <section>
                <div id="contact" className='contact-page-main-div'>
                    <h1 className='contact-us-h1'>Contact US</h1>
                    <div>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>

                                <input
                                    className='name-input'
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />


                                <input
                                    className='email-input'
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />


                                <input
                                    className='phone-input'
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />


                                <input
                                    className='address-input'
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />


                                <textarea
                                    className='dis-input'
                                    id="description"
                                    name="description"
                                    placeholder="Provide a brief description"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="contact-details">
                        <h3>Our Contact Details</h3>
                        <p><strong>Address:</strong> <br /> 123 Beach Road, Santorini Villa, Talalla, Sri Lanka</p> <br />
                        <p><strong>Contact Number:</strong> <br /> +94 123 456 789</p> <br />
                        <p><strong>Open Hours:</strong> <br /> Monday - Sunday, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage