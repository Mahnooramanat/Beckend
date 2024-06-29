const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;
app.listen(port,() =>{
    console.log('app is listening on port ${port}');
    
});
// const getRoutes = require('./src/routes/getRoutes');
// let connectToDatabase = require("./dbConnect")
// app.use(express.json());
// app.use(cors()); // This will allow all origins
// app.use((req,res)=>{
// res.send={
// name:"apple",
// color:"blue",
// };
// });
app.get('/', (req, res) => {
    res.send('haniya');
});
app.get('/about', (req, res) => {
    res.send('heyyy!');
});

// app.use('/', getRoutes);

// mongoose.set("strictQuery", false);
// connectToDatabase();

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

module.exports = app;