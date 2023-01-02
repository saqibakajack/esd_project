const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

mongoose.set('strictQuery', true);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/notifications', require('./routes/notification.route'));

app.use((error, req, res, next) => {
    res.status(500).send({
        message: error.message
    })
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database!');
        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
        process.exit(1);
    });
