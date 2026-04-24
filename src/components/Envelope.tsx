import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Envelope({ onOpen, isOpen }: EnvelopeProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="cursor-pointer group"
        onClick={onOpen}
      >
        {!isOpen && (
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="frosted-card p-12 flex flex-col items-center gap-6 w-full max-w-[400px] text-center relative"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#b91c1c] rounded-full shadow-lg flex items-center justify-center border-4 border-[#991b1b] ring-2 ring-white/30">
                <Mail size={32} className="text-[#fca5a5]" />
              </div>
              <p className="text-rose-500 uppercase tracking-[0.3em] text-[10px] font-sans font-bold mb-2">Para un momento inolvidable</p>
              <h2 className="font-serif text-3xl font-semibold italic text-gray-800">Tienes una invitación</h2>
              <p className="text-gray-600 font-sans">Haz clic para descubrir lo que hay dentro...</p>
              
              <div className="mt-4 px-10 py-3 bg-rose-500 text-white rounded-full font-sans font-semibold text-sm tracking-wide shadow-lg shadow-rose-200 group-hover:scale-105 transition-transform">
                ABRIR CARTA
              </div>
            </motion.div>
            
            {/* Wax seal effect */}
            <div className="absolute -bottom-4 right-1/2 translate-x-1/2 w-12 h-12 bg-romantic-red rounded-full shadow-lg border-4 border-romantic-gold/30 flex items-center justify-center text-white text-xs font-bold">
              ❤️
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
