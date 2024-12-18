import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() book: { title: string; author: string; isPublished: boolean }) {
    return this.booksService.create(book);
  }
}
