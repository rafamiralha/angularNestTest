import { Book } from "./books-model";
//este Omit informa como o comando diz omite o campo de ser obrigatório no formulario do cadastro
export type BookPayload = Omit<Book, 'id'>
 