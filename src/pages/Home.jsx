import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Palette, Zap, FileText } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import BadgeSection from '../components/BadgeSection';
import ResumeModal from '../components/ResumeModal';

const Home = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sivasubramani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/60 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/60 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200/60 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Sivasubramani Velusamy
              </span>
              <span className="inline-block animate-bounce ml-2">👋</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Full-Stack Developer, Software Developer & Cloud Enthusiast passionate about creating 
              innovative solutions that make a difference
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <button
                onClick={() => setShowResumeModal(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
              >
                <FileText className="w-5 h-5" />
                <span className="font-semibold">View Resume</span>
              </button>
              
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <Download className="w-5 h-5" />
                <span className="font-semibold">Download Resume</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-6 mb-12"
            >
              <a
                href="https://github.com/sivasubramanivelusamy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/sivasubramanivelusamy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="mailto:sivasubramani17v@gmail.com"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-red-500" />
              </a>
            </motion.div>

            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="animate-bounce"
            >
              <ArrowDown className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technically proficient and career-focused IT undergraduate with a strong interest in solving real-world problems through
software. Skilled in Java and modern development practices, with hands-on virtual internship experience in software
development. Known for quick learning, clear communication. Eager to contribute to development teams and grow in
backend engineering and cloud technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expertise in React, Node.js, and modern web frameworks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl"
            >
              <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating beautiful, intuitive user experiences with modern design principles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl"
            >
              <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cloud
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AWS, Google Cloud
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Badges Section */}
      <BadgeSection />

      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
      />
    </PageWrapper>
  );
};

export default Home;