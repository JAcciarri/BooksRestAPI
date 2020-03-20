import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
    @PrimaryGeneratedColumn()     
    ISBN: number;

    @Column()
    title: string;
    
    @Column()
    published_in: number;

}