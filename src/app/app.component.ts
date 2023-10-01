import {Component} from '@angular/core';
import {Cliente} from '../shared/model/cliente';
import {Produto} from "../shared/model/produto";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cliente: Cliente;
  clientes: Array<Cliente>;
  produtos: Array<Produto>;
  produto: Produto;
  selectProduto:Produto | undefined;
  selectCliente:Cliente | undefined



  constructor() {
    this.cliente = new Cliente();
    this.clientes = new Array<Cliente>();
    this.produto = new Produto();
    this.produtos = new Array<Produto>();
  }

  inserirCliente(): void {
    this.clientes.push(this.cliente);
    this.cliente = new Cliente();
    this.produto = new Produto();
  }

  removerCliente(clienteARemover:Cliente): void {
    const idxRemover = this.clientes.findIndex(cliente => cliente.cpf === clienteARemover.cpf);
    if(idxRemover >= 0){
      this.clientes.splice(idxRemover,1);
    }
  }

    inserirProduto(): void{
      this.produto.id = this.gerarId();
      this.produtos.push(this.produto);
      this.produto = new Produto();
    }

  removerProduto(produtoCliente:Produto): void {
    const idxRemover = this.produtos.findIndex(produto => produto.id === produtoCliente.id);
    if(idxRemover >= 0){
      this.produtos.splice(idxRemover,1);
    }
  }

  comprarProduto(){
    if (this.selectProduto  instanceof Produto) {
      this.selectCliente?.inserirProdutoComprado(this.selectProduto);
      
    }
  }


  gerarId():number{
    if (this.produtos.length <= 0) {
      return 1;
    } else {
      return this.produtos.length + 1;
    }
  }


}






