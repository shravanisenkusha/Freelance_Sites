import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { individualProduct } from '../data';

const IndividualProductPage = () => {
  const { id } = useParams();
  const [showChat, setShowChat] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Find the product by ID
  const product = individualProduct.find((p) => p.id === parseInt(id));
  
  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 bg-white relative">
      <Navbar />
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-white via-[#f0f9ff] to-[#e0f2fe] w-full py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <div className="flex justify-center md:justify-start">
            <img src={product.heroImage} alt={`${product.name} Logo`} className="w-20 h-20 object-contain mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
            {product.tagline}
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            {product.description}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
            >
              <span>🍏</span> iOS Download
            </a>
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
            >
              <span>🤖</span> Android Download
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center z-10 mb-12 md:mb-0">
          <div>
            <img src={product.phoneMockup} alt={`${product.name} App`} className="w-[250px] md:w-[320px] object-contain" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#e0f2fe] to-transparent z-0 rounded-t-[50%]" />
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white text-center py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          {product.howItWorks.title}
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
          {product.howItWorks.steps.map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="bg-[#e6f7f4] rounded-3xl overflow-hidden w-60 h-60 shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-[#0f9d84] font-medium">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
          {product.howItWorks.description}
        </p>
       
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Your Smart Food Scanner – Powered by Data</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {product.features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASE SECTION */}
      <section className="py-16 px-8 bg-blue-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Why NutriGen?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {product.useCases.map((use, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{use.title}</h3>
              <p>{use.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Behind NutriGen</h2>
        <ul className="list-disc max-w-3xl mx-auto space-y-3 text-lg pl-6">
          {product.techFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-8 bg-green-50">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {product.testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-700">"{t.text}"</p>
              <p className="mt-4 font-semibold text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-green-200 to-blue-200">
        <h2 className="text-3xl font-bold mb-4">{product.cta.title}</h2>
        <p className="mb-6">{product.cta.subtitle}</p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800">{product.cta.primaryButton}</button>
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100">{product.cta.secondaryButton}</button>
        </div>
      </section>

      {/* FLOATING FAQ CHAT */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <div className="w-80 bg-white rounded-xl shadow-xl p-4 border border-gray-300 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setShowChat(false)}>
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-2">🤖 Ask NutriBot</h3>
            <ul className="space-y-2">
              {product.faqs.map((faq, i) => (
                <li key={i}>
                  <button onClick={() => setSelectedAnswer(i)} className="text-left w-full text-sm text-blue-600 hover:underline">
                    {faq.question}
                  </button>
                  {selectedAnswer === i && (
                    <p className="mt-1 text-gray-700 text-sm">{faq.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button onClick={() => setShowChat(true)} className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700">
            <MessageSquare size={24} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default IndividualProductPage;
