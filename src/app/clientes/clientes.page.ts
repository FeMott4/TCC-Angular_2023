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

  }
  public file: any = {};

  isLoading: boolean = false;
  nome_usuario: any;
  private _messageService: any;

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  validaEmail(email:any) {
    // expressão regular
    var validaemail =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return validaemail.test(String(email).toLowerCase());
   }

  validaTelefone(telefone:any) {
    var re = /^[0-9]{2,3}[9]{1}[0-9]{4,4}$/ ;
    return re.test(telefone);
   }

  inserirCliente(dados: any){
    this.cliente.nome = dados.nome;
    this.cliente.email = dados.email;
    this.cliente.telefone = dados.telefone;

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
