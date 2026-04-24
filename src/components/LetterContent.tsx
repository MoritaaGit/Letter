import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Heart, Stars, Music, Coffee } from 'lucide-react';

export default function LetterContent() {
  const [response, setResponse] = useState<string | null>(null);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="max-w-[600px] w-full frosted-card p-12 flex flex-col items-center text-center relative"
    >
      {/* Wax Seal Icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#b91c1c] rounded-full shadow-lg flex items-center justify-center border-4 border-[#991b1b] ring-2 ring-white/30">
        <Heart className="h-8 w-8 text-[#fca5a5] fill-current" />
      </div>

      {!response ? (
        <div className="relative z-10 w-full">
          <p className="text-rose-500 uppercase tracking-[0.3em] text-[10px] font-sans font-bold mb-6">Para alguien especial</p>
          
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight italic font-serif">Hola de nuevo,</h1>
          
          <div className="space-y-6 mb-10 font-serif">
            <p className="text-gray-700 text-lg leading-relaxed">
              He estado pensando en la manera perfecta de decir esto, pero a veces las palabras sobran cuando el corazón habla. Me encantaría que me acompañaras en algo diferente.
            </p>
            <p className="text-gray-600 italic text-xl">
              ¿Me harías el honor de tener una cita conmigo?
            </p>
          </div>

          {/* Details Section from Theme */}
          <div className="w-full grid grid-cols-3 border-t border-b border-rose-200/50 py-6 mb-10">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-rose-400 font-sans font-bold mb-1">Cuándo</span>
              <span className="text-gray-800 font-medium">Este Viernes</span>
            </div>
            <div className="flex flex-col border-l border-r border-rose-200/50">
              <span className="text-[10px] uppercase tracking-widest text-rose-400 font-sans font-bold mb-1">Hora</span>
              <span className="text-gray-800 font-medium">19:30 PM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-rose-400 font-sans font-bold mb-1">Dónde</span>
              <span className="text-gray-800 font-medium">Lugar Sorpresa</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => setResponse('yes')}
              className="px-8 py-3 bg-rose-500 text-white rounded-full font-sans font-semibold text-sm tracking-wide shadow-lg shadow-rose-200 hover:scale-105 transition-transform"
            >
              SÍ, ME ENCANTARÍA
            </button>
            <motion.button
              animate={{ x: noPosition.x, y: noPosition.y }}
              onHoverStart={moveNo}
              onClick={moveNo}
              className="px-8 py-3 bg-white/50 text-gray-600 border border-gray-200 rounded-full font-sans font-semibold text-sm tracking-wide hover:bg-white transition-colors"
            >
              TAL VEZ...
            </motion.button>
          </div>

          <div className="mt-12 opacity-40">
            <p className="font-serif italic text-sm text-gray-500">Con todo mi cariño, Tu Admirador</p>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10 relative z-10"
          >
            <div className="mb-6 flex justify-center gap-3">
              <Stars className="text-romantic-gold animate-bounce" size={40} />
              <Heart className="text-romantic-red fill-romantic-red animate-pulse" size={48} />
              <Stars className="text-romantic-gold animate-bounce delay-100" size={40} />
            </div>
            
            <h2 className="font-script text-6xl text-romantic-red mb-6">¡Me has hecho la persona más feliz!</h2>
            <p className="font-serif text-2xl italic text-neutral-600 mb-10">
              Prepárate para una noche inolvidable... nos vemos pronto. ✨
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-romantic-gold/20">
                <Music className="text-romantic-red mb-2" />
                <span className="text-xs uppercase tracking-widest text-neutral-400">Buena Música</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-romantic-gold/20">
                <Coffee className="text-romantic-gold mb-2" />
                <span className="text-xs uppercase tracking-widest text-neutral-400">Gran Café</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
