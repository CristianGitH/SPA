import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { ClienteService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  public id!: number;
  public customer!: Customer;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';
  public activatedRoute: any;

  constructor(public clienteService: ClienteService,
    private router: Router,
    activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    let param = this.activatedRoute.params['_value'];  
      this.id = param.id;

    this.clienteService.getById(this.id).subscribe(data => {
      this.customer= data;
    });
  }

  public edit(){
    console.log(this.customer)

    this.clienteService.edit(this.customer).subscribe(data => {
      this.router.navigate(['/clientes-lista']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
