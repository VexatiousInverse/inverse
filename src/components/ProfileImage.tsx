import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-lg transform -rotate-6" />
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
      />
    </motion.div>
  );
};

export default ProfileImage;