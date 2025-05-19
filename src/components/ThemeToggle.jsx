import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-yellow-300 text-gray-800'} shadow-lg`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FaSun className="text-xl" />
      ) : (
        <FaMoon className="text-xl" />
      )}
    </motion.button>
  )
}

export default ThemeToggle