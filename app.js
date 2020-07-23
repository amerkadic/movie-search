import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';

import authRoutes from './routes/auth';
import collectionRoutes from './routes/collection';

const { MONGO_URI } = config;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const db = MONGO_URI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api', collectionRoutes);
app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

export default app;