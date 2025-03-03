import { Application, Router } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { bookController } from "./controllers/book_controller.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Oe pas mal c'est francais";
  })
  .get("/books", bookController.getBooks)
  .get("/books/:id", bookController.getBookById)
  .post("/books", bookController.addBook)
  .put("/books/:id", bookController.updateBook)
  .delete("/books/:id", bookController.deleteBook);

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on http://localhost:8000");
await app.listen({ port: 8000 });
