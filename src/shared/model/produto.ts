import {Cliente} from "./cliente";

export class Produto {
  private _nome: string = '';
  preco:number = 0;
  private _comprador:Cliente = new Cliente();

  get comprador(): Cliente {
    return this._comprador;
  }

  set comprador(value: Cliente) {
    this._comprador = value;
  }


  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
  id: number = 0;


}
