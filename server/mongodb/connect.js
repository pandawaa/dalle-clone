import mongoose from "mongoose"

const connectToDB = (url) => {
  mongoose.set("strictQuery", true)
  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.log("Failed to connect with mongo")
      console.log(err)
    })
}

export default connectToDB
