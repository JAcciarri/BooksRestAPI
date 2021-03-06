import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Book } from './Book' 

@Entity()
export class Author {
    @PrimaryGeneratedColumn()     
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @OneToMany(type => Book, book => book.author)
    books: Book[];
}