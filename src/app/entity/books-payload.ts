import { Book } from "./books-model";

export type BookPayload = Omit<Book, 'id'>
 