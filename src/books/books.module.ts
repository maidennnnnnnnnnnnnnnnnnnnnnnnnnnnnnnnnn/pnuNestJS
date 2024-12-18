import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // Реєструємо BookRepository
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
