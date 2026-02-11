import { motion } from 'framer-motion';
import { FlickrPhoto } from '@/types';
import { forwardRef } from 'react';

interface PhotoCardProps {
  photo: FlickrPhoto;
  index: number;
}

export const PhotoCardMolecule = forwardRef<HTMLDivElement, PhotoCardProps>(({ photo, index }, ref) => {
  const cleanTitle = photo.title || 'Untitled';

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        layout: { duration: 0.3 },
      }}
      className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <a href={photo.link} target="_blank" rel="noopener noreferrer" className="block aspect-square">
        <img
          src={photo.media.m}
          alt={cleanTitle}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay with photo info - visible on hover (desktop) or tap (mobile) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 line-clamp-2">{cleanTitle}</h3>
            <p className="text-gray-300 text-[10px] sm:text-xs line-clamp-1">{photo.author.replace(/.*\((.+)\).*/, '$1')}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
});

PhotoCardMolecule.displayName = 'PhotoCardMolecule';
