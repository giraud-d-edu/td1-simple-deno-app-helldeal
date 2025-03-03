import { Book } from "../models/book.ts";
import * as bookRepository from "../repositories/book_repository.ts";

export const getBooks = (): Book[] => {
  return bookRepository.getBooks();
};

export const getBookById = (id: number): Book | undefined => {
  return bookRepository.getBookById(id);
};
export const addBook = (book: Book): void => {
  bookRepository.addBook(book);
};

export const updateBook = (id: number, book: Book): Book | undefined => {
  return bookRepository.updateBook(id, book);
};

export const deleteBook = (id: number): boolean => {
  return bookRepository.deleteBook(id);
};
