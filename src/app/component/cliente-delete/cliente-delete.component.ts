import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  public id: number = 0;
  public customer!: Customer;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';
  activatedRouteouteouteatedRoute: any;
  constructor(public clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getById();
  }

  public getById() {

    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.clienteService.getById(this.id).subscribe(data => {
      this.customer = data;
    });
  }

  public delete(){

    this.clienteService.delete(this.customer.CustomerID).subscribe(data => {
      this.router.navigate(['/clientes-lista']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
