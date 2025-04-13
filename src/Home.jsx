import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Blogs from "./Blogs";

const HomePage = () => {
  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/50"></div>
        <div className="relative z-10 pt-40 pb-28 px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Garvita
              </span>
              <br className="hidden sm:block" />
              Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building Sustainable Futures Through Innovative Engineering
            </p>
            <div className="max-w-4xl mx-auto mt-12 text-lg text-gray-300 space-y-4">
              <p>
                At Garvita Infrastructure, we are driven by a relentless pursuit
                of excellence and a commitment to sustainability. Our innovative
                approach blends cutting-edge technology with thoughtful design
                to shape the landscapes of tomorrow.
              </p>
              <p>
                We believe infrastructure is more than just construction—it's
                about building communities, connecting people, and creating
                long-term value. With every project, we aim to set new
                benchmarks in quality, integrity, and environmental
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Tomorrow's Foundations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in innovative infrastructure solutions with a focus
                on sustainable development and cutting-edge engineering
                practices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Expert Team
                  </h3>
                  <p className="text-gray-600 mt-2">Certified professionals</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 mt-2">Rigorous standards</p>
                </div>
              </div>
            </div>
            <div className="relative group h-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-2xl blur-lg opacity-50"></div>
              <img
                src="https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2022/11/Quality-infrastructure-development.jpg?fit=720%2C324&ssl=1"
                alt="Construction"
                className="w-full h-full object-cover rounded-xl shadow-xl transform transition duration-500 hover:scale-101"
              />
            </div>
          </div>
        </div>
      </section>

      <Blogs />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help with your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact
                </h3>
                <p className="text-gray-600 text-center">
                  +91 78375 05862
                  <br />
                  Mon-Sat: 9AM - 6PM
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  contact@garvita.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
