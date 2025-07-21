import React from 'react';
import { motion } from 'framer-motion';
import { badges } from '../data/badges';

const BadgeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Badges
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of technical skills and achievements earned through continuous learning and professional development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(badges).map(([category, categoryBadges], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              
              <div
                className="grid gap-6"
                style={
                  category === "Google" && categoryBadges.length === 1
                    ? { justifyContent: "center", gridTemplateColumns: "min-content" }
                    : { gridTemplateColumns: categoryBadges.length === 1 ? "min-content" : `repeat(${categoryBadges.length}, minmax(0, 1fr))` }
                }
              >
                {categoryBadges.map((badge, badgeIndex) => (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + badgeIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gray-800 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-20 h-20 mb-3">
                      <div className="w-full h-full bg-white dark:bg-gray-900 flex justify-center items-center rounded-md">
                        <img
                          src={badge.image}
                          alt={badge.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {badge.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeSection;