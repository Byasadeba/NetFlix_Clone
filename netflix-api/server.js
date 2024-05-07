const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const app = express();

app.use(cors())

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db started")
});

app.use("/api/user",userRoutes)

app.listen(5000,console.log(`server started at https://localhost/5000`));