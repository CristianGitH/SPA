import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  public id!: number;
  public cliente!: Cliente;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;
  activatedRoutedRoute: any;

  constructor(public ClienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    let param = this.activatedRoutedRoute.params['_value'];
    this.id=param.id

    this.ClienteService.getById(this.id).subscribe(data => {
      this.cliente= data;
    });
  }

  public edit(){
    console.log(this.cliente)

    this.ClienteService.edit(this.cliente).subscribe(data => {
      this.router.navigate(['/cliente-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
