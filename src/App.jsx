import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import useSound from 'use-sound'
import { FaBirthdayCake, FaCalendarAlt, FaMoon, FaSun } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'
import { RiHeartFill } from 'react-icons/ri'

import AgeDisplay from './components/AgeDisplay'
import AnimeCharacter from './components/AnimeCharacter'
import DatePicker from './components/DatePicker'
import ThemeToggle from './components/ThemeToggle'
import { calculateAge } from './utils/calculateAge'

import celebrationSound from '../public/sounds/celebration.mp3'

function App() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)
  const [isBirthday, setIsBirthday] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [characterMood, setCharacterMood] = useState('neutral')
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  
  const [playCelebration] = useSound(celebrationSound)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const handleDateChange = (date) => {
    setBirthDate(date)
    const calculatedAge = calculateAge(date)
    setAge(calculatedAge)
    
    const today = new Date()
    const birthDateObj = new Date(date)
    const isBday = today.getDate() === birthDateObj.getDate() &&
      today.getMonth() === birthDateObj.getMonth()
    
    setIsBirthday(isBday)
    setCharacterMood(isBday ? 'happy' : 'neutral')
    
    if (isBday) {
      setShowConfetti(true)
      playCelebration()
      setTimeout(() => setShowConfetti(false), 10000)
    }
  }
  
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    setCharacterMood(!darkMode ? 'excited' : 'neutral')
    setTimeout(() => setCharacterMood('neutral'), 2000)
  }
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-pink-50 text-gray-900'}`}>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      
      <div className="container mx-auto px-4 py-8">
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Anime Age Calculator
          </h1>
          <p className="text-lg md:text-xl">
            Discover your age in various fun formats!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <AnimeCharacter mood={characterMood} isBirthday={isBirthday} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
          >
            <div className="mb-8">
              <DatePicker onDateChange={handleDateChange} darkMode={darkMode} />
            </div>

            <AnimatePresence>
              {age && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <AgeDisplay age={age} isBirthday={isBirthday} />
                </motion.div>
              )}
            </AnimatePresence>

            {isBirthday && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                className="mt-6 p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center gap-3"
              >
                <GiPresent className="text-2xl animate-bounce" />
                <span className="font-bold text-lg">Happy Birthday!</span>
                <RiHeartFill className="text-2xl animate-pulse" />
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.footer 
          className="mt-12 text-center text-sm opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          Made with ❤️ for anime lovers | Deploy on Vercel
        </motion.footer>
      </div>
    </div>
  )
}

export default App