import {Request, Response} from 'express'
import {getRepository, Repository} from 'typeorm'
import {Book} from '../entities/Book'

export const getBooks = async(req: Request, res: Response): Promise<Response> =>{
    const books = await getRepository(Book).find();
    return res.json(books);
};

export const getOneBook = async (req: Request, res: Response): Promise<Response> => {
    const book = await getRepository(Book).findOne(req.params.isbn);
    return res.json(book);
};

export const createBook = async (req: Request, res: Response): Promise<Response> => {
    const newBook = getRepository(Book).create(req.body);
    const result = await getRepository(Book).save(newBook);
    return res.json(result);
};

export const updateBook = async (req: Request, res:Response): Promise<Response> => {
    const book = await getRepository(Book).findOne(req.params.isbn);
    if (book){
        getRepository(Book).merge(book, req.body);
        const result = await getRepository(Book).save(book);
       return res.json(result);
    }
    
    return res.status(404).json({'msg': 'Book not found'})
};

export const deleteBook = async (req: Request, res:Response): Promise<Response> => {
    const result = await getRepository(Book).delete(req.params.isbn);
    return res.json(result);
};