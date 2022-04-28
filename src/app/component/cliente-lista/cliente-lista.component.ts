import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit, OnDestroy {

  public customer: Customer[] = [];
  public subClientes: Subscription = new Subscription;

  constructor(public clienteService: ClienteService ) { }

  ngOnDestroy(): void {
    this.subClientes.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subClientes =  this.clienteService.getAll().subscribe(data=>{
      this.customer = data;
    });
  }

}
