import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CertificateCarousel from '../components/CertificateCarousel';
import { certificates } from '../data/certificates';
import { Award, TrendingUp, Users, Globe } from 'lucide-react';

const Certifications = () => {
  const stats = [
  { icon: Award, label: 'Certifications Earned', value: certificates.length },
  { icon: TrendingUp, label: 'Projects Built', value: '3+' },
  { icon: Users, label: 'Tech Stack Familiarity', value: '5+' },
  { icon: Globe, label: 'Learning Hours', value: '1000+' },
  //{ icon: Globe, label: 'Hackathons Attended', value: '2' },
];


  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my professional certifications and continuous learning journey 
            in technology and software development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Certifications
          </h2>
          <CertificateCarousel certificates={certificates} />
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              These certifications represent my commitment to professional growth and expertise 
              in various domains including cloud computing, web development, and software architecture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cloud Platforms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AWS, Google Cloud
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Modern web technologies and frameworks
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Best Practices
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Software architecture and design patterns
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Certifications;