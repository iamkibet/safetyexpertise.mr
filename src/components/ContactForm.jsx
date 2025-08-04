import React, { useState } from "react";
import Button from "./Button";
import { services } from "../data";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">
          Ready to discuss your safety needs? Fill out the form below and we'll
          get back to you within 24 hours.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.company}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
            value={formData.serviceInterest}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
