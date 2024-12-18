import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<import("./book.entity").Book[]>;
    create(book: {
        title: string;
        author: string;
        isPublished: boolean;
    }): Promise<import("./book.entity").Book>;
}
