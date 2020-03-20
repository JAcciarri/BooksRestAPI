import {Router} from 'express'
const router = Router();

import {getAuthors, getOneAuthor, createAuthor, deleteAuthor, updateAuthor} from '../controllers/author.controller'
import { create } from 'domain';

router.get('/authors', getAuthors);
router.get('/authors/:id', getOneAuthor);
router.post('/authors', createAuthor);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id', deleteAuthor);

export default router;