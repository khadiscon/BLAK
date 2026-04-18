import { motion } from 'motion/react';

function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-stone-200 flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2 text-stone-400">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium">Image Placeholder</span>
      </div>
    </div>
  );
}

// 8 placeholder slots — swap src props when real images are ready
const photos = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));

export default function Gallery() {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* Title */}
      <section className="py-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-green-600"
        >
          Our Gallery
        </motion.h1>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <PlaceholderImage className="w-full aspect-square" />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
