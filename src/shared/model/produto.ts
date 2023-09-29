export class Produto {

  get comprador(): string {
    return this._comprador;
  }

  set comprador(value: string) {
    this._comprador = value;
  }
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
  id: number = 0;
  private _nome: string = '';
  preco:number = 0;
  private _comprador:string = 'Sem Comprador';
}
