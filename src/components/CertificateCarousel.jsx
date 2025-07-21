import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Calendar, Award } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificateCarousel = ({ certificates }) => {
  const handleDownload = (certificate) => {
    window.open(certificate.pdfUrl, '_blank');
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-12"
      >
        {certificates.map((certificate, index) => (
          <SwiperSlide key={certificate.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    <Award className="w-4 h-4" />
                    <span>Certificate</span>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {certificate.issuer}
                </p>
                
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{certificate.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                  {certificate.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDownload(certificate)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex-1 justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => window.open(certificate.pdfUrl, '_blank')}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6 !important;
          background: white;
          border-radius: 50%;
          width: 40px !important;
          height: 40px !important;
          margin-top: -20px !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        
        .dark .swiper-button-next,
        .dark .swiper-button-prev {
          background: #1f2937;
          color: #60a5fa !important;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
        }
        
        .dark .swiper-pagination-bullet {
          background: #4b5563 !important;
        }
        
        .dark .swiper-pagination-bullet-active {
          background: #60a5fa !important;
        }
      `}</style>
    </div>
  );
};

export default CertificateCarousel;