import { Component, OnInit } from '@angular/core'; 
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {



  Cliente = [];

  nome = 'Joaozinho';

  cliente = {
    nome: null,
    email: null,
    telefone: null,
    funcionario:{
      nome:'',
      funcao:'',
      horarios:[
        {hora:'',bloqueado:false}
      ]
    },
    descricao:'',
    data:'',
    horario:''
  }

  horarios=[
    {hora:'',bloqueado:false}
  ]

  funcionarios=[{
    nome:'',
    funcao:'',
    horarios:[
      {hora:'',bloqueado:false}
    ]
  }]

  public file: any = {};

  isLoading: boolean = false;
  nome_usuario: any;
  private _messageService: any;
  telefone: any;

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { 
    this.getFuncionarios()
    this.getNumber()
    this.horarios.splice(0,1)
  }
  // Defini uma data disponivel
  definirData(event:any){
    console.log(event)
    this.cliente.data=event.detail.value
  }
// seleciona os funcionarios
  selecionarFuncionario(funcionario:any){
    console.log(funcionario)
    console.log(this.cliente)
    this.horarios=funcionario.horarios
    this.cliente.funcionario=funcionario
  }
// definir um horario 
  selecionarHorario(horario:any){
    console.log(horario)
    this.cliente.horario=horario.hora
    console.log(this.cliente)

  }

//  pega os funcionarios e exibi-os na tela
  getFuncionarios(){
    this._crudService.fetchAll("funcionario")
    .then(funcionarios=>{
      this.funcionarios=funcionarios
    })
  }

  //Função que manda mensagem pro cliente
  getNumber(){
  }
 


  // Validação de E-mail
  validaEmail(email:any) {
    // expressão regular
    var validaemail =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return validaemail.test(String(email).toLowerCase());
   }

  validaTelefone(telefone:any) {
    var re = /^[0-9]{2,3}[9]{1}[0-9]{4,4}$/ ;
    return re.test(telefone);
   }

  inserirCliente(){

    //  this._crudService.insert(this.cliente, 'cliente');

    // Para teste comentar esse código e descomentar o de cima 
      if (this.validaEmail(this.cliente.email)) {
         this._crudService.insert(this.cliente, 'cliente');
     } else {
        if (!this.validaEmail(this.cliente.email)) {
          this._message.error('E-mail inválido');
        }
  
         if (!this.validaTelefone(this.cliente.telefone)) {
           this._message.error('Número de telefone inválido');
         }
     }

  }

  

  ngOnInit() {
   
  }


}
