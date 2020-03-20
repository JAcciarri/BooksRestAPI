import 'reflect-metadata'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'
import booksRoutes from './routes/books.routes'
import authorRoutes from './routes/author.routes'

//initialize
const app = express();
createConnection();


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(booksRoutes);
app.use(authorRoutes);

//
app.listen(3000, () =>
    console.log('Listening on PORT 3000')
 );