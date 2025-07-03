import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import nutrigenLogo from "../assets/Nutrigen.png";
import NutriScreen1 from "../assets/NutriScreen1.png";
import NutriScreen2 from "../assets/NutriScreen2.png";
import NutriScreen3 from "../assets/NutriScreen3.png";
import NutriScreen4 from "../assets/NutriScreen4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const faqs = [
  {
    q: "What is NutriGen?",
    a: "NutriGen is a smart food scanning app that helps track nutrition by scanning QR codes.",
  },
  {
    q: "Is NutriGen free?",
    a: "Yes, NutriGen is free to use for individual users. API integrations may have usage limits.",
  },
  {
    q: "What data sources does it use?",
    a: "It uses OpenFoodFacts and AI-powered recognition to fetch and analyze food data.",
  },
];

const NutriGenProductPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="font-sans text-gray-800 bg-white relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#f7fff8] to-[#eef9ff] py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-left">
            <img
              src={nutrigenLogo}
              alt="NutriGen Logo"
              className="mb-4"
              style={{ width: "90px", height: "100px" }}
            />
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Scan Smarter. Eat Better.
            </h1>
            <p className="text-lg text-gray-700">
              NutriGen helps you track calories and nutrients by simply scanning
              QR codes on food items.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800 transition"
              >
                Download on App Store
              </a>
              <a
                href="#"
                className="border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-100 transition"
              >
                Get it on Play Store
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full max-w-md">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="rounded-xl shadow-xl"
            >
              {[NutriScreen1, NutriScreen2, NutriScreen3, NutriScreen4].map(
                (img, i) => (
                  <SwiperSlide key={i} className="w-64">
                    <img
                      src={img}
                      alt={`Nutri Screen ${i + 1}`}
                      className="rounded-2xl"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Your Smart Food Scanner – Powered by Data
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "📷 QR Code Scanning",
                desc: "Instantly fetch food data by scanning QR codes.",
              },
              {
                title: "🕢 Calorie & Nutrient Info",
                desc: "See calories, macros, vitamins, and ingredients.",
              },
              {
                title: "📊 Personalized Dashboard",
                desc: "Track your intake with charts and smart goals.",
              },
              {
                title: "🔄 API Integration",
                desc: "Built on OpenFoodFacts & AI-powered recognition.",
              },
              {
                title: "🌐 Works Anywhere",
                desc: "Supports global food standards and mobile use.",
              },
              {
                title: "🔐 Secure & Private",
                desc: "Data is protected with end-to-end encryption.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-16 px-8 bg-blue-50">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why NutriGen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "👤 For Individuals",
                text: "Ideal for fitness tracking, weight management, and health-conscious eating.",
              },
              {
                title: "🏢 For Companies",
                text: "Perfect for employee wellness programs and smart cafeterias.",
              },
              {
                title: "💻 For Developers",
                text: "Use our API to build nutrition-based tools and apps easily.",
              },
            ].map((use, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{use.title}</h3>
                <p>{use.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Section */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Tech Behind NutriGen
          </h2>
          <ul className="list-disc max-w-3xl mx-auto space-y-3 text-lg pl-6">
            <li>Real-time API integration with OpenFoodFacts.</li>
            <li>AI-based food recognition and QR processing.</li>
            <li>Secure cloud data handling and storage.</li>
            <li>Nutrition analytics and dietary trend tracking.</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-8 bg-green-50">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Vidhi Shah",
                text: "NutriGen makes calorie tracking effortless! I just scan and go.",
              },
              {
                name: "Vrusha Morakhiya",
                text: "This app helped me manage my diet during my fitness journey. Love the dashboard!",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="italic text-gray-700">“{t.text}”</p>
                <p className="mt-4 font-semibold text-right">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 text-center bg-gradient-to-r from-green-200 to-blue-200">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mb-6">
            Start using NutriGen or contact us for integration into your
            platform.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800">
              Start Using NutriGen
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>
            &copy; {new Date().getFullYear()} NutriGen | Powered by Senkusha
            Data Solutions
          </p>
        </footer>

        {/* Floating FAQ Chat */}
        <div className="fixed bottom-6 right-6 z-50">
          {showChat ? (
            <div className="w-80 bg-white rounded-xl shadow-xl p-4 border border-gray-300 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={() => setShowChat(false)}
              >
                <X size={20} />
              </button>
              <h3 className="text-lg font-semibold mb-2">🤖 Ask NutriBot</h3>
              <ul className="space-y-2">
                {faqs.map((faq, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSelectedAnswer(i)}
                      className="text-left w-full text-sm text-blue-600 hover:underline"
                    >
                      {faq.q}
                    </button>
                    {selectedAnswer === i && (
                      <p className="mt-1 text-gray-700 text-sm">{faq.a}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button
              onClick={() => setShowChat(true)}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700"
            >
              <MessageSquare size={24} />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NutriGenProductPage;
