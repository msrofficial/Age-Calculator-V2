import { motion } from 'framer-motion'
import { RiTimerFlashLine } from 'react-icons/ri'
import { GiLifeBar } from 'react-icons/gi'
import { BsCalendar2Heart } from 'react-icons/bs'

const AgeDisplay = ({ age, isBirthday }) => {
  if (!age) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
    >
      <motion.div
        variants={itemVariants}
        className={`p-4 rounded-lg shadow-md ${isBirthday ? 'bg-gradient-to-br from-yellow-200 to-yellow-400' : 'bg-white/20'} backdrop-blur-sm border border-white/30`}
      >
        <div className="flex items-center gap-2 mb-2">
          <RiTimerFlashLine className="text-xl text-purple-600" />
          <h3 className="font-bold">Your Age</h3>
        </div>
        <p className="text-3xl font-bold">{age.years} years</p>
        <p className="text-sm opacity-80">{age.months} months | {age.days} days</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={`p-4 rounded-lg shadow-md ${isBirthday ? 'bg-gradient-to-br from-pink-200 to-pink-400' : 'bg-white/20'} backdrop-blur-sm border border-white/30`}
      >
        <div className="flex items-center gap-2 mb-2">
          <BsCalendar2Heart className="text-xl text-pink-600" />
          <h3 className="font-bold">Next Birthday</h3>
        </div>
        <p className="text-3xl font-bold">{age.nextBirthdayDays}</p>
        <p className="text-sm opacity-80">days to go</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={`p-4 rounded-lg shadow-md ${isBirthday ? 'bg-gradient-to-br from-blue-200 to-blue-400' : 'bg-white/20'} backdrop-blur-sm border border-white/30`}
      >
        <div className="flex items-center gap-2 mb-2">
          <GiLifeBar className="text-xl text-blue-600" />
          <h3 className="font-bold">In Months</h3>
        </div>
        <p className="text-3xl font-bold">{age.totalMonths}</p>
        <p className="text-sm opacity-80">months old</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={`p-4 rounded-lg shadow-md ${isBirthday ? 'bg-gradient-to-br from-green-200 to-green-400' : 'bg-white/20'} backdrop-blur-sm border border-white/30`}
      >
        <div className="flex items-center gap-2 mb-2">
          <RiTimerFlashLine className="text-xl text-green-600" />
          <h3 className="font-bold">In Weeks</h3>
        </div>
        <p className="text-3xl font-bold">{age.totalWeeks}</p>
        <p className="text-sm opacity-80">weeks old</p>
      </motion.div>
    </motion.div>
  )
}

export default AgeDisplay