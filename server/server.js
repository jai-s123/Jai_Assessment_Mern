const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();




const db = 'mongodb://localhost/employee';
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log("DB Error : ", err);
})


app.use(cors());
app.use(bodyParser.json());


const empRoutes = require('./Routes/routes');
app.use("/api",empRoutes);



const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server running on port ${PORT} `);
});