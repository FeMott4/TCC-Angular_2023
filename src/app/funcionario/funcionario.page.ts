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
    horarios:[
      {hora:'',bloqueado:false}
    ]
  }
  funcionarios:any=[]

  horarios:any=[]

  horario={hora:'',bloqueado:false}


// cadastro de horario
  cadastrarHorario(){
    this.funcionario.horarios.push(this.horario)
    console.log(this.funcionario)
    this.horario={hora:'',bloqueado:false}
  }

  constructor(
    private _crudService: CrudService,
    private _message: MessageService
  ) {
  this.funcionario.horarios.splice(0,1)
   }

  ngOnInit() {
    // this.recuperarFuncionarios()
  }
  // Inserir Funcionario
  inserirFuncionario(){
    this._crudService.insert(this.funcionario,'funcionario')
  }
// recupera os dados dos funcionarios
  recuperarFuncionarios(){
    this._crudService.fetchAll("funcionario")
    .then((dados)=>{
      console.log(dados)
      this.funcionarios=dados

    })
  }
  // Pega os horarios do firebase
  recuperarhorario(){
    this._crudService.fetchAll("horarios")
    .then((dados)=>{
      console.log(dados)
      this.horarios=dados

    })
  }
  // Defini uma horario
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

  listarhorario(){
    this.recuperarhorario()
  }


}
