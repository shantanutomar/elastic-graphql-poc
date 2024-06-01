import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBookInput, UpdateBookInput } from "./graphql";

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    try {
      const book = new Book();
      book.title = createBookInput.title;
      book.author = createBookInput.author;

      return this.bookRepository.save(book);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async findAll(): Promise<Book[]> {
    try {
      return this.bookRepository.find();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async findOne(id: string): Promise<Book> {
    try {
      return this.bookRepository.findOneBy({id});
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async update(id: string, updateBookInput: UpdateBookInput): Promise<Book> {
    try {
      const book = await this.bookRepository.findOneBy({id})
      if(book) {
        book.title = updateBookInput.title;
        book.author = updateBookInput.author;
        return this.bookRepository.save(book);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async remove(id: string): Promise<Book> {
    try {
      const book = await this.bookRepository.findOneBy({id})
      if(book) {
        await this.bookRepository.delete(book);
        return book;
      }
    } catch (e) {
      console.error(e);
      throw e;

    }
  }
}
