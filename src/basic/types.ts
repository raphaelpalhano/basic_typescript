// TYPES

// boolean
const isOpen: boolean = 10 > 5;

// string, template, aspas duplas, simples
const text: string = 'open the door' || `open ${isOpen}` || 'open aaah';

//number: float, int, hex, bin
const numbers: number = 0xff0f | 10 | 10.3 | 0.5 | 0o1011;

// array: declarar o array e seu tipo
const livros: string[] = ['book1', 'book2', 'book3'];

const canetas: Array<string> = ['cane', 'Faber', 'Loli', 'devi'];

//tuple: quando já tenho definido o tipo e quantidade de valores
const title: [number, string, object] = [
  10,
  'Florianópolis',
  { descricao: '', paginas: 10 },
];
title;

// enum/dicionario: enumerador para criar o conjunto de chave e valor
enum binarios {
  um = 0o1,
  dois = 10,
  tres = 11,
}

// any: qualquer coisa. Posso atribuir para qualquer tipo
// não é legal usar any
let coisa: any;
coisa = 10;
coisa = 'dez';

// void: não retorna nada, apenas executa algo ou atribui.
function log(): void {
  console.log('sem retorno');
}

// null e undifened
type nada = null | undefined;

// never: é utilizado para dizer que nunca vai retornar, utilizado para
// lançar error
function semRetorno(): never {
  throw new Error('exceção para e nunca retorna');
}

// object: representa uma estrutura que não é um primitivo
// estrutura que tem chave e valor
const valor = {
  types: {
    custo: 10,
    pagamento: 'mensal',
  },
};

console.log('executado!');
