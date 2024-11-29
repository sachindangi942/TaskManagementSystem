
const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { DBconnetion } = require('./Database/DBconnection');

dotenv.config();
const app = express();
app.use(cors())
DBconnetion();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//   })
//   .catch((err) => console.error(err));


    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
