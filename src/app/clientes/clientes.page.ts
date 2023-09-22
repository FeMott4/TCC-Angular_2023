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

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  inserirCliente(dados: any){
    this.cliente.nome = dados.nome;
    this.cliente.email = dados.email;
    this.cliente.telefone = dados.telefone;
    // this.aluno.idade = 10;
    // this.aluno.ra = 321321;

    this._crudService.insert(this.cliente, 'cliente');
  }

  

  ngOnInit() {
  }

}
