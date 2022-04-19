import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-guardar',
  templateUrl: './cliente-guardar.component.html',
  styleUrls: ['./cliente-guardar.component.css']
})
export class ClienteGuardarComponent implements OnInit {

  public cliente!: Cliente;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente(0, '', '', '', '', '', '', '', '', 0);
  }

  public save(){

    console.log(this.cliente)

    this.clienteService.save(this.cliente).subscribe(data => {
      this.router.navigate(['/clientes-lista']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
