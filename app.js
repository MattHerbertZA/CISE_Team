// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const {MONGOURI} = require('./config/keys');
const port = 8082;

// routes
const articles = require('./routes/api/articles');
const path = require('path')
const app = express();

//const PORT = process.end.PORT || 8082

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/articles', articles);

//if(process.env.NODE_ENV == "production") {
    app.use(express.static('seeds/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'seeds', 'build', 'index.html'))
    })
//} else{
// app.get('/',(req, res) =>{
//     res.send("Api running");
// });   
//}

app.listen(port, () => console.log(`Server running on port ${port}`));