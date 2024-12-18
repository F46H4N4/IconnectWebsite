import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setErrorMessage('Message sent successfully!');
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });
      setCaptchaToken(null); // Reset CAPTCHA
    } catch (error) {
      console.error('Submission Error:', error);
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
        <div className="col-xxl-12 mb-30">
          <ReCAPTCHA
            sitekey="6LeAUpcqAAAAAJl3ui_qFLa22xFVvQDopWNLe5CI" // Replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />
     
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
