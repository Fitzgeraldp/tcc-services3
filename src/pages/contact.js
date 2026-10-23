import React, { useState } from 'react'; {/* review code */ }

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a server
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    }
    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
                <script>
                    alert("Thank you for contacting The Coding Commando. We will get back to you shortly.");
                </script>
            </form>
        </section>
    );
}