import {Request, Response} from 'express'
import {Author} from '../entities/Author'
import {Repository, getRepository} from 'typeorm'


export const getAuthors = async(req:Request, res:Response): Promise<Response> => {
    const authors = await getRepository(Author).find();
    return res.json(authors);
};

export const getOneAuthor = async (req: Request, res: Response): Promise<Response> => {
    const author = await getRepository(Author).findOne(req.params.id);
    if (author){
        return res.json(author);
    }
    return res.status(404).json({'msg': 'Author not found'});
};

export const createAuthor = async (req: Request, res: Response): Promise<Response> => {
    const newAuthor = getRepository(Author).create(req.body);
    const result = await getRepository(Author).save(newAuthor);
    return res.json(result);
};

export const updateAuthor = async (req: Request, res:Response): Promise<Response> => {
    const author = await getRepository(Author).findOne(req.params.id);
    if (author){
        getRepository(Author).merge(author, req.body);
        const result = await getRepository(Author).save(author);
       return res.json(result);
    }
    
    return res.status(404).json({'msg': 'Author not found'})
};

export const deleteAuthor = async (req: Request, res:Response): Promise<Response> => {
    const result = await getRepository(Author).delete(req.params.id);
    return res.json(result);
};