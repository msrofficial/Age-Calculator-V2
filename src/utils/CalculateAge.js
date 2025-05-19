export const calculateAge = (birthDate) => {
  if (!birthDate) return null
  
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  
  // Basic age calculation
  let years = today.getFullYear() - birthDateObj.getFullYear()
  let months = today.getMonth() - birthDateObj.getMonth()
  let days = today.getDate() - birthDateObj.getDate()
  
  // Adjust if birth date hasn't occurred yet this year
  if (months < 0 || (months === 0 && days < 0)) {
    years--
    months += 12
  }
  
  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += lastMonth.getDate()
    months--
  }
  
  // Calculate next birthday
  const nextBirthday = new Date(
    today.getFullYear(),
    birthDateObj.getMonth(),
    birthDateObj.getDate()
  )
  
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
  }
  
  const diffTime = nextBirthday - today
  const nextBirthdayDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  // Calculate total months and weeks
  const diffTotal = today - birthDateObj
  const totalDays = Math.floor(diffTotal / (1000 * 60 * 60 * 24))
  const totalWeeks = Math.floor(totalDays / 7)
  const totalMonths = years * 12 + months
  
  return {
    years,
    months,
    days,
    nextBirthdayDays,
    totalWeeks,
    totalMonths,
    totalDays
  }
}