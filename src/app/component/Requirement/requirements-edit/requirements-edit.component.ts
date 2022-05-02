import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Requirement } from 'src/app/domain/requirement';
import { RequirementService } from 'src/app/service/requirement.service';

@Component({
  selector: 'app-requirements-edit',
  templateUrl: './requirements-edit.component.html',
  styleUrls: ['./requirements-edit.component.css']
})
export class RequirementsEditComponent implements OnInit {

  public id!: number;
  public requirement!: Requirement;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;
  activatedRoutedRoute: any;

  constructor(public RequirementService: RequirementService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    let param = this.activatedRoutedRoute.params['_value'];
    this.id=param.id;

    this.RequirementService.getById(this.id).subscribe(data => {
      this.requirement= data;
    });
  }

  public edit(){
    console.log(this.requirement)

    this.RequirementService.edit(this.requirement).subscribe(data => {
      this.router.navigate(['/requirement-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
