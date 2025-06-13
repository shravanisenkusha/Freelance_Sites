import { Button } from "../components/ui/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pioneering the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-zinc-300">
              We build innovative solutions at the intersection of training,
              product development, and tech services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Explore Our Services{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              At Senkusha, we operate at the cutting edge of technology,
              delivering excellence across three key areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Training</h3>
              <p className="text-zinc-600 mb-6">
                Comprehensive tech training programs designed to create
                industry-ready professionals with cutting-edge skills.
              </p>
              <a
                href="/training"
                className="flex items-center text-purple-600 font-medium hover:text-purple-800"
              >
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Product Development Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Development</h3>
              <p className="text-zinc-600 mb-6">
                Building innovative tech products and startups that solve
                real-world problems with our pioneering approach.
              </p>
              <a
                href="/products"
                className="flex items-center text-rose-600 font-medium hover:text-rose-800"
              >
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Services</h3>
              <p className="text-zinc-600 mb-6">
                Full-stack tech services with specialized AI offerings to help
                businesses transform and stay ahead of the curve.
              </p>
              <a
                href="/services"
                className="flex items-center text-amber-600 font-medium hover:text-amber-800"
              >
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We're proud of the difference we're making in the tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                200+
              </div>
              <p className="text-zinc-600">Interns Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
                15+
              </div>
              <p className="text-zinc-600">Products in Development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                50+
              </div>
              <p className="text-zinc-600">Client Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                5+
              </div>
              <p className="text-zinc-600">AI Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Leveraging cutting-edge artificial intelligence to solve complex
              problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 bg-opacity-50 rounded-xl p-8 border border-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-zinc-300">
                Advanced AI algorithms that predict trends and help businesses
                make data-driven decisions.
              </p>
            </div>
            <div className="bg-zinc-800 bg-opacity-50 rounded-xl p-8 border border-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-rose-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">
                Machine Learning Models
              </h3>
              <p className="text-zinc-300">
                Custom ML solutions that adapt and improve over time for various
                industry applications.
              </p>
            </div>
            <div className="bg-zinc-800 bg-opacity-50 rounded-xl p-8 border border-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">
                Natural Language Processing
              </h3>
              <p className="text-zinc-300">
                Text analysis and language understanding capabilities for
                enhanced user experiences.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Innovate with Us?
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
              Whether you're looking to join our team, partner with us, or
              leverage our services, we're excited to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-300">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
