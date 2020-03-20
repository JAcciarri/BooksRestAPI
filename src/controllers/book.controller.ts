import {Request, Response} from 'express'
import {getRepository, Repository} from 'typeorm'
import {Book} from '../entities/Book'
import {Author} from '../entities/Author'

export const getBooks = async(req: Request, res: Response): Promise<Response> =>{
    const books = await getRepository(Book).find({
        relations: ["author"]
    });
    return res.json(books);
};

export const getOneBook = async (req: Request, res: Response): Promise<Response> => {
    const book = await getRepository(Book).findOne({
        where: {ISBN: req.params.isbn},
        relations: ["author"]
    });
    if (book){
        return res.json(book);
    }

    return res.status(404).json({'msg': 'Book not found'});
};

export const createBook = async (req: Request, res: Response): Promise<Response> => {
    // must create a full book with req.body instead of setting the individual properties in body
    let newBook = new Book(); newBook.published_in = req.body.published_in; newBook.title = req.body.title;
    const author = await getRepository(Author).findOne(req.body.authorId);
    if (author){
        newBook.author = author;
    }
    const result = await getRepository(Book).save(newBook);
    return res.json(result); 
};

export const updateBook = async (req: Request, res:Response): Promise<Response> => {
    const book = await getRepository(Book).findOne(req.params.isbn);
    if (book){
        const author = await getRepository(Author).findOne(req.body.authorId);
        if (author){
            book.author = author;
            getRepository(Book).merge(book, req.body);
            const result = await getRepository(Book).save(book);
            return res.json(result);
        }
       return res.status(404).json({'msg': 'Author not found'});
    }
    
    return res.status(404).json({'msg': 'Book not found'})
};

export const deleteBook = async (req: Request, res:Response): Promise<Response> => {
    const result = await getRepository(Book).delete(req.params.isbn);
    return res.json(result);
};