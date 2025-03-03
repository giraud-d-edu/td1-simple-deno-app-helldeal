import { Book } from "../models/book.ts";

const books: Book[] = [
  {
    id: 1,
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    isbn: "978-0618260263",
    datePublication: "1954-07-29",
  },
  {
    id: 2,
    titre: "Orgueil et Préjugés",
    auteur: "Jane Austen",
    isbn: "978-0141439518",
    datePublication: "1813-01-28",
  },
];

export function getBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

export function addBook(book: Book): void {
  books.push(book);
}

export function updateBook(id: number, book: Book): Book | undefined {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return undefined;
  }
  books[index] = book;
  return books[index];
}

export function deleteBook(id: number): boolean {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return false;
  }
  books.splice(index, 1);
  return true;
}
