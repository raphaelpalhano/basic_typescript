//Type Aliases
type id = number | string;
type description = string | object;

//Uion
const logGenerator = (ui: id, description: description) => {
  console.log(
    `Member id: ${ui} Description: ${description} registred successfully`,
  );
};

logGenerator(0, 'Juju');

type Book = 'Dom Queixote de La Mancha' | 'Volta ao mundo em 80 dias';

const livros = (book: Book) => {
  return book;
};

livros('Dom Queixote de La Mancha');
