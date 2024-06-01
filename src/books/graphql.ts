
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateBookInput {
    title?: Nullable<string>;
    author?: Nullable<string>;
}

export class UpdateBookInput {
    id: string;
    title?: Nullable<string>;
    author?: Nullable<string>;
}

export class Book {
    id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<string>;
}

export abstract class IQuery {
    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: string): Book | Promise<Book>;
}

type Nullable<T> = T | null;
