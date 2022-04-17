import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  public id!: number;
  public cliente!: Cliente;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;
  activatedRouteouteouteatedRoute: any;

  constructor(public clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getById();
  }

  public getById() {
    let param = this.activatedRouteouteouteatedRoute.params['_value'];
    this.id = param.id;

    this.clienteService.getById(this.id).subscribe(data => {
      this.cliente = data;
    });
  }

  public delete(){
    
    this.clienteService.delete(this.cliente.Cliente_id).subscribe(data => {
      this.router.navigate(['/cliente-lista']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });    
  }
}
