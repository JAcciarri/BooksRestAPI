import express from 'express'
import morgan from 'morgan'
import booksRoutes from './routes/books.routes'
import {createConnection} from 'typeorm'

//initialize
const app = express();
createConnection();


//middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(booksRoutes);

//
app.listen(3000, () =>
    console.log('Listening on PORT 3000')
 );