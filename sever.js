import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Connect to MongoDB
connect('mongodb://localhost/mern_project', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/students', studentRoutes);

// Start the server
const port = process.env.PORT || 3000;   // localhost 3000
app.listen(port, () => console.log(`Server running on port ${port}`));
