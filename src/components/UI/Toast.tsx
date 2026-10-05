import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

interface ToastProps {
  message: string | null
  onClose?: () => void
}

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1d1d1f] text-white shadow-xl text-xs sm:text-sm font-medium border border-white/10"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ type: 'spring', damping: 24, stiffness: 350 }}
          role="status"
          aria-live="polite"
        >
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#34c759] text-white">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
