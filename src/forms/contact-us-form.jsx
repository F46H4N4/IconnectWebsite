import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Client-side input validation
  const validateInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setErrorMessage('Message sent successfully ✅');
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Network or backend error:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      {errorMessage && (
        <div className={`alert ${errorMessage.includes('successfully') ? 'bg-green-100' : 'bg-red-100'} mb-4 p-3 rounded`}>
          {errorMessage}
        </div>
      )}

      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
};

export default ContactUsForm;
