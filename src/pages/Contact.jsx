import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [showChatBox, setShowChatBox] = useState(false);
  const [faqHistory, setFaqHistory] = useState([]);
  const [customQuestion, setCustomQuestion] = useState("");

  const answers = {
    "What kind of data solutions do you offer?": "We offer end-to-end solutions including data integration, ETL pipelines, analytics dashboards, and cloud data warehousing.",
    "Can you help automate our data workflows?": "Absolutely! We specialize in automating data ingestion, transformation, and reporting workflows using Python, Airflow, and other tools.",
    "Do you provide custom dashboards or reporting tools?": "Yes, we create custom dashboards using tools like Power BI, Tableau, and custom web-based interfaces.",
    "How do you ensure data security and compliance?": "We follow industry best practices including encryption, access control, audit trails, and compliance with GDPR and other standards.",
    "Can you integrate with our existing systems?": "Yes! We integrate with ERPs, CRMs, APIs, databases, and cloud platforms like AWS, Azure, and GCP."
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleQuestionClick = (question) => {
    const answer = answers[question];
    setFaqHistory((prev) => [...prev, { question, answer }]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customQuestion.trim()) {
      setFaqHistory((prev) => [
        ...prev,
        {
          question: customQuestion,
          answer: "Thanks for your question! Our team will get back to you shortly."
        }
      ]);
      setCustomQuestion("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "Have questions? We're just a message away!"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@senkusha.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Business Street<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      

      {/* Floating Chatbot */}
      <button
        onClick={() => setShowChatBox((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition duration-300"
        aria-label="Chat with Us"
      >
        {showChatBox ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {showChatBox && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[500px] bg-white shadow-2xl border border-gray-200 rounded-xl p-4 z-50 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Chat with Us
          </h3>
          <p className="text-sm text-gray-600 mb-3">Quick Questions:</p>
          <div className="space-y-2 mb-4">
            {Object.keys(answers).map((q, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(q)}
                className="block w-full text-left px-3 py-2 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-400 transition"
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={handleCustomSubmit} className="mt-2 space-y-2">
            <input
              type="text"
              placeholder="Type your own question..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ask
            </button>
          </form>

          {faqHistory.length > 0 && (
            <div className="border-t pt-2 mt-4">
              {faqHistory.map((item, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-semibold text-blue-700">Q: {item.question}</p>
                  <p className="text-gray-700 text-sm mt-1">A: {item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
