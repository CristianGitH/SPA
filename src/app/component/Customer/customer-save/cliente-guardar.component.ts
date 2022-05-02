import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { ClienteService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-cliente-guardar',
  templateUrl: './cliente-guardar.component.html',
  styleUrls: ['./cliente-guardar.component.css']
})
export class ClienteGuardarComponent implements OnInit {

  public customer!: Customer;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.customer = new Customer(0, '', '', '', '', '', '', 0);
  }

  public save(){

    this.clienteService.save(this.customer).subscribe(data => {
      this.router.navigate(['/clientes-lista']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
