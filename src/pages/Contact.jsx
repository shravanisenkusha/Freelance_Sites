import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, X } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showChatBox, setShowChatBox] = useState(false);
  const [faqHistory, setFaqHistory] = useState([]);
  const [customQuestion, setCustomQuestion] = useState('');

  const answers = {
    "What kind of data solutions do you offer?": "We offer end-to-end solutions including data integration, ETL pipelines, analytics dashboards, and cloud data warehousing.",
    "Can you help automate our data workflows?": "Absolutely! We specialize in automating data ingestion, transformation, and reporting workflows using Python, Airflow, and other tools.",
    "Do you provide custom dashboards or reporting tools?": "Yes, we create custom dashboards using tools like Power BI, Tableau, and custom web-based interfaces.",
    "How do you ensure data security and compliance?": "We follow industry best practices including encryption, access control, audit trails, and compliance with GDPR and other standards.",
    "Can you integrate with our existing systems?": "Yes! We integrate with ERPs, CRMs, APIs, databases, and cloud platforms like AWS, Azure, and GCP."
  };

  const handleQuestionClick = (question) => {
    const answer = answers[question];
    setFaqHistory(prev => [...prev, { question, answer }]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customQuestion.trim()) {
      setFaqHistory(prev => [
        ...prev,
        {
          question: customQuestion,
          answer: "Thanks for your question! Our team will get back to you shortly."
        }
      ]);
      setCustomQuestion('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans relative">
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Contact Us Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-blue-600" /> +91 9029471567</p>
            <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-600" /> senkusha@datasolutions.com</p>
            <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> Mumbai, Maharashtra, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full border border-gray-300 rounded-xl p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChatBox(prev => !prev)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition duration-300"
        aria-label="Chat with Us"
      >
        {showChatBox ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Box */}
      {showChatBox && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[500px] bg-white shadow-2xl border border-gray-200 rounded-xl p-4 z-50 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Chat with Us
          </h3>
          <p className="text-sm text-gray-600 mb-3">Quick Questions:</p>
          <div className="space-y-2 mb-4">
            {Object.keys(answers).slice(0, 5).map((q, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(q)}
                className="block w-full text-left px-3 py-2 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-400 transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Custom Question Box */}
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

          {/* Display Chat History */}
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

export default Contact;
