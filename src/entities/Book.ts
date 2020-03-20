import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {Author} from './Author'
@Entity()
export class Book {
    @PrimaryGeneratedColumn()     
    ISBN: number;

    @Column()
    title: string;
    
    @Column()
    published_in: number;

    @ManyToOne(type => Author, author => author.books)
    author: Author;
}