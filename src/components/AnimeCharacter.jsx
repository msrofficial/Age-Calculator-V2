import { motion } from 'framer-motion'
import { FaBirthdayCake } from 'react-icons/fa'

const AnimeCharacter = ({ mood, isBirthday }) => {
  const moods = {
    neutral: {
      expression: 'default',
      animation: {
        y: [0, -10, 0],
        transition: {
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut'
        }
      }
    },
    happy: {
      expression: 'happy',
      animation: {
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut'
        }
      }
    },
    excited: {
      expression: 'excited',
      animation: {
        rotate: [0, 10, -10, 0],
        transition: {
          repeat: 3,
          duration: 0.3
        }
      }
    }
  }

  const currentMood = moods[mood] || moods.neutral

  return (
    <div className="relative">
      <motion.div
        animate={currentMood.animation}
        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
      >
        {/* Character base */}
        <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
        
        {/* Face */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-white rounded-full"></div>
        
        {/* Eyes */}
        <div className="absolute top-2/5 left-1/3 w-6 h-6 bg-black rounded-full"></div>
        <div className="absolute top-2/5 right-1/3 w-6 h-6 bg-black rounded-full"></div>
        
        {/* Mouth based on mood */}
        {currentMood.expression === 'happy' && (
          <motion.div 
            className="absolute top-3/5 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-pink-400 rounded-b-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
        {currentMood.expression === 'neutral' && (
          <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full"></div>
        )}
        {currentMood.expression === 'excited' && (
          <motion.div 
            className="absolute top-3/5 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-pink-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        )}
        
        {/* Blush */}
        <div className="absolute top-1/2 left-1/4 w-8 h-4 bg-pink-200 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-4 bg-pink-200 rounded-full opacity-70"></div>
        
        {/* Hair */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4 bg-purple-600 rounded-t-full"></div>
        <div className="absolute top-1/8 left-1/4 w-1/4 h-1/8 bg-purple-600 rounded-full"></div>
        <div className="absolute top-1/8 right-1/4 w-1/4 h-1/8 bg-purple-600 rounded-full"></div>
      </motion.div>
      
      {isBirthday && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        >
          <FaBirthdayCake className="text-4xl text-yellow-400 animate-bounce" />
        </motion.div>
      )}
    </div>
  )
}

export default AnimeCharacter