import { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Envelope from './components/Envelope';
import LetterContent from './components/LetterContent';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen romantic-gradient flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements from Theme */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10 border-4 border-rose-300 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-10 border-2 border-rose-400 rounded-full" />
      <div className="absolute top-1/4 right-20 w-16 h-16 opacity-10 rotate-45 bg-rose-300" />
      
      <div className="absolute bottom-0 left-0 p-8 flex gap-4 opacity-20">
        <div className="w-10 h-10 rounded-full bg-rose-400" />
        <div className="w-6 h-6 rounded-full bg-rose-300 mt-4" />
      </div>
      
      <div className="absolute top-0 right-0 p-8 flex gap-4 opacity-20">
        <div className="w-6 h-6 rounded-full bg-rose-300" />
        <div className="w-10 h-10 rounded-full bg-rose-400 mt-4" />
      </div>

      {/* Visual Background Elements */}
      <FloatingHearts />
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <Envelope onOpen={() => setIsOpen(true)} isOpen={isOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="w-full flex justify-center py-12"
          >
            <LetterContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle quote at the bottom */}
      {!isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-8 font-serif italic text-neutral-500 tracking-widest text-sm uppercase px-4 text-center"
        >
          Hecho con amor para esa persona especial
        </motion.p>
      )}
    </main>
  );
}

