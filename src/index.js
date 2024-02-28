import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
.then(() => {
    app.on("error",(err) => {
        console.log("error",err)
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("db failed",err)
})
