import mongoose from "mongoose";
import "dotenv/config"

const MONGOURI = process.env.MONGO_URI
const DBNAME = process.env.DB_NAME

const connectToDatabase = async () => {
    try {
        const connect = await mongoose.connect(`${MONGOURI}/${DBNAME}`)
        console.log("connect to database !", connect.connection.host)
    } catch (error) {
        console.log(error)
    }

}

export default connectToDatabase