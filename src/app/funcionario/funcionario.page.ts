import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})
export class FuncionarioPage implements OnInit {

  funcionario={
    nome:'',
    funcao:'',

  }
  funcionarios:any=[]

  constructor(
    private _crudService: CrudService,
    private _message: MessageService
  ) {
  
   }

  ngOnInit() {
    // this.recuperarFuncionarios()
  }

  inserirFuncionario(dados:any){
    this.funcionario.nome=dados.nome;
    this.funcionario.funcao=dados.funcao;
    this._crudService.insert(this.funcionario,"funcionario")
    this.recuperarFuncionarios()
  }
  recuperarFuncionarios(){
    this._crudService.fetchAll("funcionario")
    .then((dados)=>{
      console.log(dados)
      this.funcionarios=dados

    })
  }
  definirHora(funcionario:any){
    console.log(funcionario)
    localStorage.setItem("funcionario",JSON.stringify(funcionario))
    const funcionarioJSON = localStorage.getItem("funcionario");
    if (funcionarioJSON!==null) {
      const funcionarioObj = JSON.parse(funcionarioJSON);
      console.log(funcionarioObj.id)
    }
 
  }

  listar(){
    this.recuperarFuncionarios()
  }


}
