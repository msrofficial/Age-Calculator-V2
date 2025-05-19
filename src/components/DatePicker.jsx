import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

import 'react-datepicker/dist/react-datepicker.css'

const CustomDatePicker = ({ onDateChange, darkMode }) => {
  const [startDate, setStartDate] = useState(null)

  const handleChange = (date) => {
    setStartDate(date)
    onDateChange(date.toISOString().split('T')[0])
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="relative"
    >
      <label className="block text-lg font-medium mb-2">
        Select your birth date
      </label>
      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Click to select date"
          className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 focus:border-transparent ${darkMode ? 'bg-gray-800 border-purple-500 text-white focus:ring-purple-500' : 'bg-white border-pink-300 focus:ring-pink-500'}`}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          maxDate={new Date()}
          popperClassName={`${darkMode ? 'dark-datepicker' : ''}`}
        />
        <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500" />
      </div>
    </motion.div>
  )
}

export default CustomDatePicker