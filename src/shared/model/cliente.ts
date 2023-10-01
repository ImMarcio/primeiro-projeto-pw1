import {Produto} from "./produto";


export class Cliente {
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    this._idade = value;
  }

  get produtosComprados(): Array<Produto> {
    return this._produtosComprados;
  }


  private _nome: string = '';
  private _cpf: string = '';
  private _idade: number = 0;
  private _produtosComprados: Array<Produto> = [];

  inserirProdutoComprado(produto:Produto){
    this._produtosComprados.push(produto);
  }

}
