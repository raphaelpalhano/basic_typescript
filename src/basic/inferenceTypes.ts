// Inferência de tipo é a tipagem dinâmica por atribuição

const texto = 'declarei o tipo implicitamente passando a string para variável';

const number = 10;

window.addEventListener('click', (env) => {
  console.log(env.timeStamp);
});

// Casos para tipar:

function CreateAccount(user: string, password: string, email: string) {}
