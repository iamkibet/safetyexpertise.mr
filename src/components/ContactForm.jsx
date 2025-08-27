import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { services } from "../data";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  // Initialize EmailJS after component mounts
  useEffect(() => {
    emailjs.init("V-A9Y3g4-cl6n0huy");
    console.log("EmailJS initialized with key:", "V-A9Y3g4-cl6n0huy");
  }, []);

  // Auto-hide success and error messages after 5 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const SERVICE_ID = "service_292xxqb";
    const TEMPLATE_ID = "template_gca2406";
    const PUBLIC_KEY = "V-A9Y3g4-cl6n0huy";
    
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully:", result);
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      },
      (err) => {
        console.error("EmailJS error:", err);
        setError("Failed to send message. Please try again or contact us directly.");
        setLoading(false);
      }
    );
  };

  const testEmailJS = () => {
    const SERVICE_ID = "service_292xxqb";
    const TEMPLATE_ID = "template_gca2406";
    const PUBLIC_KEY = "V-A9Y3g4-cl6n0huy";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: "Test User",
      to_name: "Test Recipient",
      message: "This is a test message from your EmailJS integration.",
    }, PUBLIC_KEY)
    .then((result) => {
      console.log("EmailJS Test Successful:", result);
      alert("EmailJS Test Successful!");
    })
    .catch((err) => {
      console.error("EmailJS Test Error:", err);
      alert("EmailJS Test Failed. Please check console for details.");
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">
          Ready to discuss your safety needs? Fill out the form below and we'll
          get back to you within 24 hours.
        </p>
        
        {/* Test Button for Debugging */}
        <button
          onClick={testEmailJS}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
        >
          Test EmailJS Connection
        </button>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 font-medium">
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-800 font-medium">
              {error}
            </p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="serviceInterest"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 resize-none"
            placeholder="Tell us about your safety needs and requirements..."
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="privacy"
            required
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/50"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and consent to being contacted regarding my inquiry.
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
