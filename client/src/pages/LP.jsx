// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black z-0"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s infinite ${
                  Math.random() * 5
                }s alternate ease-in-out`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Create.
              </span>
              <span className="block mt-4">Connect.</span>
              <span className="block mt-4">Thrive.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              shack'sNest is where your ideas find their perfect expression and
              audience. A platform designed for creators, by creators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/signup">
                <Button
                  variant="primary"
                  size="large"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Start Creating — It's Free
                </Button>
              </Link>
              <Link to="/demo">
                <Button
                  variant="outline"
                  size="large"
                  className="border-gray-600 hover:border-white hover:bg-white/5 transition-all"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Logo Cloud - Social Proof */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-10">
            TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {["Forbes", "TechCrunch", "The Verge", "Wired", "Fast Company"].map(
              (logo) => (
                <div
                  key={logo}
                  className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section - Clean Cards */}
      <section className="py-28 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-blue-400">modern</span> creators
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create, publish, and grow your audience in
              one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                ),
                title: "Powerful Editor",
                description:
                  "A distraction-free writing environment with markdown support and real-time preview.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                ),
                title: "Engaged Community",
                description:
                  "Connect with readers and fellow creators who appreciate your work.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                ),
                title: "Lightning Fast",
                description:
                  "Our platform is optimized for speed so your readers never wait.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                ),
                title: "Analytics",
                description:
                  "Understand your audience with detailed engagement metrics.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                ),
                title: "Monetization",
                description:
                  "Multiple ways to earn from your content with subscriptions and tips.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
                title: "Scheduling",
                description:
                  "Plan your content calendar and publish at optimal times.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-28 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Your content, <span className="text-teal-400">beautifully</span>{" "}
                presented
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                shack'sNest provides elegant templates that make your writing
                look professional without any design skills needed.
              </p>
              <div className="space-y-6">
                {[
                  "Responsive designs that work on any device",
                  "Customizable themes to match your brand",
                  "Syntax highlighting for code snippets",
                  "Embeddable media for rich content",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-400 mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p className="text-lg text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                {/* Mockup of the editor */}
                <div className="bg-gray-900 p-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-800 rounded w-full"></div>
                    <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-800 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl w-2/3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Engagement up</p>
                    <p className="text-sm text-gray-400">
                      +42% from last month
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by <span className="text-purple-400">creators</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of creators who've found their home on shack'sNest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "shack'sNest has transformed how I connect with my audience. The engagement tools are unmatched.",
                name: "Alex Rivera",
                role: "Tech Writer",
                avatar: "AR",
              },
              {
                quote:
                  "I've tried every platform out there. Nothing comes close to the writing experience here.",
                name: "Samira Khan",
                role: "Fiction Author",
                avatar: "SK",
              },
              {
                quote:
                  "My newsletter grew 3x after switching to shack'sNest. The discovery features are incredible.",
                name: "Jordan Lee",
                role: "Content Creator",
                avatar: "JL",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800"
              >
                <svg
                  className="w-8 h-8 text-purple-500 mb-6 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-300 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-medium mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to <span className="text-blue-300">elevate</span> your
            content?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join shack'sNest today and start building your audience with our
            powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/signup">
              <Button
                variant="primary"
                size="large"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Get Started — Free Forever
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white/10 transition-all"
              >
                See Premium Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                shack'sNest
              </h3>
              <p className="mb-6">
                The modern platform for creators who want to make an impact.
              </p>
              <div className="flex space-x-4">
                {["twitter", "github", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Examples", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Blog", "Guides", "Help Center", "API Docs"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Company</h4>
              <ul className="space-y-3">
                {["About", "Careers", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-gray-500 text-center">
            <p>
              © {new Date().getFullYear()} shack'sNest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
