import { RouterContext } from "https://deno.land/x/oak@v17.1.4/router.ts";
import * as bookService from "../services/book_service.ts";
import { Book } from "../models/book.ts";

export const bookController = {
  getBooks: (ctx: RouterContext<"/books">) => {
    ctx.response.body = bookService.getBooks();
  },
  getBookById: (ctx: RouterContext<"/books/:id">) => {
    const id = Number(ctx.params.id);
    if (!id) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid book id";
      return;
    }
    ctx.response.body = bookService.getBookById(id);
  },
  addBook: async (ctx: RouterContext<"/books">) => {
    const body = await ctx.request.body.json();
    if (!body) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid book data";
      return;
    }
    const Book: Book = {
      id: Math.floor(Math.random() * 100),
      titre: body.titre,
      auteur: body.auteur,
      isbn: body.isbn,
      datePublication: body.datePublication,
    };
    console.log(ctx.request.body);

    bookService.addBook(Book);
    ctx.response.body = "Book added";
  },
  updateBook: async (ctx: RouterContext<"/books/:id">) => {
    const id = Number(ctx.params.id);
    if (!id) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid book id";
      return;
    }
    const body = await ctx.request.body.json();
    if (!body) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid book data";
      return;
    }
    const book: Book = {
      id: id,
      titre: body.titre,
      auteur: body.auteur,
      isbn: body.isbn,
      datePublication: body.datePublication,
    };
    const updatedBook = bookService.updateBook(Number(id), book);
    if (!updatedBook) {
      ctx.response.status = 404;
      ctx.response.body = "Book not found";
      return;
    }
    ctx.response.body = "Book updated";
  },
  deleteBook: (ctx: RouterContext<"/books/:id">) => {
    const id = Number(ctx.params.id);
    if (!id) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid book id";
      return;
    }

    const bookDeleted = bookService.deleteBook(id);
    if (!bookDeleted) {
      ctx.response.status = 404;
      ctx.response.body = "Book not found";
      return;
    }
    ctx.response.body = "Book deleted";
  },
};
