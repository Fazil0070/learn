import React from 'react';
import { ChevronRight, RocketIcon, GitBranchIcon, BarChartIcon, LaptopIcon, UserCheckIcon, CodeIcon, BellIcon, BotIcon, UsersIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="text-blue-700 mb-6 mx-auto">
      {icon}
    </div>
    <h4 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LearnspireLandingPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <h1 className="text-4xl font-extrabold text-blue-700">Learnspire</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#why-learnspire" className="hover:text-blue-700 font-medium transition">Why Learnspire?</a>
            <a href="#features" className="hover:text-blue-700 font-medium transition">Features</a>
            <a href="#demo" className="bg-blue-700 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-800 transition shadow-md">Book a Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-40 flex items-center min-h-screen">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">Transform Your Academy with the #1 LMS Solution</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">Advanced Learning Management System for Managing and Scaling Your Training Business</p>
          <a href="#demo"
            className="inline-block bg-white text-blue-700 font-semibold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105">
            Book a Free Demo
            <ChevronRight className="inline-block ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Why Learnspire Section */}
      <section id="why-learnspire" className="py-32 bg-gray-50">
        <div className="container mx-auto text-center px-8">
          <h3 className="text-5xl font-extrabold text-gray-800 mb-10">Why Choose Learnspire?</h3>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">Learnspire offers a state-of-the-art LMS platform that leverages AI-powered analytics to enhance learning experiences, reduce tech costs by 60%, and boost learner satisfaction by 30%.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<RocketIcon size={48} />}
              title="Accelerate Learner Engagement"
              description="Enhance engagement and completion rates with interactive course features and seamless integration."
            />
            <FeatureCard
              icon={<GitBranchIcon size={48} />}
              title="Personalized Learning Paths"
              description="Tailor education journeys with AI-driven recommendations based on individual progress and goals."
            />
            <FeatureCard
              icon={<BarChartIcon size={48} />}
              title="Real-time AI Analytics"
              description="Access detailed, AI-driven reports on learner performance, course progress, and assessment outcomes."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h3 className="text-5xl font-extrabold mb-16 text-center text-gray-900">Explore Our Cutting-Edge Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard
              icon={<LaptopIcon size={32} />}
              title="Interactive Courses"
              description="Engage learners with dynamic, interactive content that adapts to their pace and style."
            />
            <FeatureCard
              icon={<UserCheckIcon size={32} />}
              title="Smart Attendance Tracking"
              description="Automatically monitor participation and progress across all courses with ease."
            />
            <FeatureCard
              icon={<CodeIcon size={32} />}
              title="Real-World Coding Challenges"
              description="Sharpen skills with industry-relevant coding tasks and instant feedback."
            />
            <FeatureCard
              icon={<BellIcon size={32} />}
              title="Timely Announcements"
              description="Keep everyone in the loop with targeted, automated updates and notifications."
            />
            <FeatureCard
              icon={<BotIcon size={32} />}
              title="AI Proctoring"
              description="Ensure exam integrity with advanced AI-powered monitoring and analysis."
            />
            <FeatureCard
              icon={<UsersIcon size={32} />}
              title="User-Friendly Interface"
              description="Navigate effortlessly with our intuitive, accessible design for all user levels."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="demo" className="py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center px-8">
          <h3 className="text-5xl font-extrabold mb-8">Experience Learnspire Firsthand</h3>
          <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90">See how Learnspire can transform your academy. Book a free demo today and unlock the potential of your learning programs.</p>
          <a href="#"
            className="inline-block bg-white text-blue-700 font-semibold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105">
            Book Your Free Demo Now
            <ChevronRight className="inline-block ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">About Learnspire</h4>
              <p>Empowering academies with cutting-edge LMS solutions since 2024.</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Contact Us</h4>
              <p>Email: support@learnspire.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 Learnspire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnspireLandingPage;