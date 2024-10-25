const express = require("express")
const database = require("./Database/MongoDb");
const app = express()
const path = require('path')
const cors = require('cors');
const { error } = require("console");
const authRouter = require("./Routes/authRouter")
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname , "public")))

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

app.use('/api/auth' , authRouter)


app.listen(port , ()=>{
    console.log(`App is running on ${port}`)
})