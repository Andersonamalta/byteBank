import { Cliente } from "./classe/Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const cliente1 = new Cliente("Anderson", 11122233309, "123");
const diretor = new Diretor("Rodrigo", 10000, 123456789000);
diretor.cadastrarSenha("1234567");
const gerente = new Gerente("Marcos", 5000, 123456789111);

const logado = SistemaAutenticacao.login(diretor, "1234567");
const clienteLogado = SistemaAutenticacao.login(cliente1, "123");

console.log(logado,clienteLogado);







