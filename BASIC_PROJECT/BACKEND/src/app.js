

const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require("./routes/auth.routes")
const logRoutes = require("./routes/log.routes")
const logInRoutes = require("./routes/login.routes")
const dataRoutes = require("./routes/data.routes")

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) =>{
    res.send("Hello World")
})

app.use('/api/auth', authRoutes)

app.use('/', logRoutes)

app.use('/', logInRoutes)

app.use('/', dataRoutes)



module.exports = app