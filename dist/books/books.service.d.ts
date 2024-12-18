import { Repository } from 'typeorm';
import { Book } from './book.entity';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    create(book: Partial<Book>): Promise<Book>;
}
