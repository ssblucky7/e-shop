const generatedOtp = () => {
  return Math.floor(1000 + Math.random() * 900000) + 100000 // 100000 to 999999
}

export default generatedOtp