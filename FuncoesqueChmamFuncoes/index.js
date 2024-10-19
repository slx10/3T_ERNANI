/** CRIE UM ARRAY DE OBJETOS => PESSOAS
 * COM OS SEGUNDOS ATRIBUTOS: NOME/SOBRENOME
 * CRIE UMA FUNÇÃO QUE ITERE SOBRE ESSE ARRAY
 * E RETIRE NOMES E SOBRENOMES
 * CRIE UMA VARIAVEL COM O CONTEÚDO :
 *        -> emalBase = "@escola.pr.gov.br"
 * A PARTIR DESSES DADOS FORME UM @ESCOLA COM
 * NOME.SOBRENOME+EMAILBASE
 * EXECUTE A FUNÇÃO...
 */

const pessoas = [];
// CRIAR EMAIL BASE
const emailBase = "@escola.pr.gov.br";

//função de construção e impressão 
function gerarEmail() {
 if (pessoas.length == 0) {
  console.log("Nenhum aluno cadastrado");
 } else {
   for (pessoa of pessoas) {
     const nome = pessoa.nome;
     const sobrenome = pessoa.sobrenome;
     const email = `${nome}.${sobrenome}${emailBase}`;
     console.log(email.tollowerCase()); 
   }
  }
}
function cadastrarAluno(nome, sobrenome) {
  pessoas.push({ nome: nome, sobrenome: sobrenome });
}
cadastrarAluno("João", "Maria");
cadastrarAluno("Maria", "João");

gerarEmail();