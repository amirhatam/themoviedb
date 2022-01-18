require('dotenv').config();
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")
const router = express.Router()

// const { port, mongoURL } = require('./utils/config')

const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/userRoutes")
// const { PORT, MONGODB_URI } = process.env


// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/azimutoDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))
app.use(debug)


// const port = PORT || 8080



// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, './public'), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })

app.use("/", router)
app.use("/user", authRoutes)
app.use("/users", usersRoutes)

if (process.env.NODE_ENV === 'production') {
    console.log("NODE_ENV :", process.env.NODE_ENV);
}

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})