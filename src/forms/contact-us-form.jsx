import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiry: "Your Inquiry about",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const selectHandler = (selectedValue) => {
    setFormData(prevState => ({
      ...prevState,
      inquiry: selectedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
        try {
      await emailjs.send(
        'service_vqamdie',
        'template_3744asb', 
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          inquiry: formData.inquiry,
          message: formData.message
        },
        '4oZhQBYXGSKWdRHWn'
      );
      
      
      // Success handling
      setErrorMessage('Message sent successfully!');
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiry: "Your Inquiry about",
        message: ""
      });
    } catch (error) {
      console.error('Email send error:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      {errorMessage && (
        <div className={`alert ${errorMessage.includes('successfully') 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'} mb-4 p-3 rounded`}
        >
          {errorMessage}
        </div>
      )}

      <div className="row gx-20">
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="inputText" 
              required 
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="inputText" 
              required 
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-35">
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="inputText" 
              required 
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__select mb-30">
            <NiceSelect
              options={[
                { value: "Your Inquiry about", text: "Your Inquiry about" },
                { value: "01 Year", text: "01 Year" },
                { value: "02 Year", text: "02 Year" },
                { value: "03 Year", text: "03 Year" },
                { value: "04 Year", text: "04 Year" },
                { value: "05 Year", text: "05 Year" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textareaText" 
              required
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button 
              type="submit" 
              className="submit-btn w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send your Request'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;