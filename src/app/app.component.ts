import {Component} from '@angular/core';
import {Usuario} from '../shared/model/usuario';
import {Produto} from "../shared/model/produto";
import {FormControl, Validators} from "@angular/forms";
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'First Project';
  usuario: Usuario;
  usuarios: Array<Usuario>;
  produtos: Array<Produto>;
  produto: Produto;
  produtoSelecionado = new FormControl<Produto | null>(null, Validators.required);
  usuarioSelecionado = new FormControl<Usuario | null>(null, Validators.required);

  selectValue:Produto | undefined;
  selectValue2:Usuario | undefined

  selectProduct: Produto | undefined;
  selectUser: Usuario | undefined;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.produto = new Produto();
    this.produtos = new Array<Produto>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
    this.produto = new Produto();


  }
  removerUsuario(cliente:Usuario): void {
    const idxRemover = this.usuarios.findIndex(usuario => cliente.cpf === usuario.cpf);
    if(idxRemover >= 0){
      this.usuarios.splice(idxRemover,1);
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
    if (this.selectValue instanceof Produto) {
      this.selectValue2?.inserirProdutoComprado(this.selectValue);
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






