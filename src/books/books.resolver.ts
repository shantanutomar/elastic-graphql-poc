import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import {
  Book,
  CreateBookInput,
  IMutation,
  IQuery,
  UpdateBookInput,
} from './graphql';

@Resolver('Book')
export class BooksResolver implements IQuery, IMutation {
  constructor(private readonly booksService: BooksService) {}

  @Mutation('createBook')
  createBook(
    @Args('createBookInput') createBookInput: CreateBookInput,
  ): Promise<Book> {
    return this.booksService.create(createBookInput);
  }

  @Query('books')
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query('book')
  book(@Args('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Mutation('updateBook')
  updateBook(
    @Args('updateBookInput') updateBookInput: UpdateBookInput,
  ): Promise<Book> {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation('removeBook')
  removeBook(@Args('id') id: string): Promise<Book> {
    return this.booksService.remove(id);
  }
}
