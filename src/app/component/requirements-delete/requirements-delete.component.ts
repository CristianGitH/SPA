import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requirement } from 'src/app/domain/requirement';
import { RequirementService } from 'src/app/service/requirement.service';

@Component({
  selector: 'app-requirements-delete',
  templateUrl: './requirements-delete.component.html',
  styleUrls: ['./requirements-delete.component.css']
})
export class RequirementsDeleteComponent implements OnInit {

  public requirementID!: number;
  public reach!: string;
  public applicationDate!: Date;
  public developmentDays!: number;
  public developmentDate!: Date;
  public testingDate!: Date;
  public Requirement!: Requirement;


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
    this.requirementID=param.id;

    this.RequirementService.getById(this.requirementID).subscribe(data => {
      this.requirementID= data;
    });
  }

  public delete(){
    
    this.RequirementService.delete(this.Requirement.RequirementID).subscribe(data => {
      this.router.navigate(['/requirements-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
