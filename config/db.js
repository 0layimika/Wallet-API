const mongoose = require("mongoose")
const config = require('config')
const URI = config.get('URI')

const connectDB = async () => {
 try {
  await mongoose.connect(URI)
  console.log(`DB connected`)
 } catch (err) {
  console.error(err.message)
  process.exit(1)
  
 }
}

module.exports = connectDB