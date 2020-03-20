import {Router} from 'express'
const router = Router();
import {getBooks, getOneBook, createBook, deleteBook, updateBook} from '../controllers/book.controller'

router.get('/books', getBooks);
router.get('/books/:isbn', getOneBook);
router.post('/books', createBook);
router.put('/books/:isbn', updateBook)
router.delete('/books/:isbn', deleteBook);

export default router