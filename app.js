const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// DB Connection
const connectToDB = require('./config/db');
connectToDB();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const indexRouter = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render routers
app.use('/', indexRouter);
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})