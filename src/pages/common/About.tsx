import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 pt-12">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Our Process</span>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
          
          <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We follow a streamlined process to get your sensor monitoring system up and running as quickly as possible
          </p>
          <div className="w-24 h-1 bg-gray-800 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="group bg-white rounded-3xl px-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-gray-600">1</span>
            </div>
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m19 8 2 2-2 2"/>
                <path d="m17 12h6"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Register Infrastructure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Register your infrastructure with all necessary details. We'll verify your information and create a secure account for you to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-gray-600">2</span>
            </div>
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Add New Sensor
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Add sensors with mandatory details and choose from our approved sensor types. Configure your monitoring setup with ease.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-gray-600">3</span>
            </div>
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Automated Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our system automatically tracks footfall traffic by sending hourly requests to your sensors, providing continuous monitoring.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-gray-600">4</span>
            </div>
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3v18h18"/>
                <path d="m19 9-5 5-4-4-3 3"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              View Analytics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access comprehensive analytics of your sensors with real-time footfall counts and detailed insights into your infrastructure usage.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of infrastructure managers who trust our sensor monitoring platform
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-700 transition-colors duration-200">
              <Link to='/dashboard'>
               Start Monitoring Today
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;