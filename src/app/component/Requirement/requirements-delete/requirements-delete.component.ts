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

  public id!: number;
  public requirement!: Requirement;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public RequirementService: RequirementService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
  public getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.RequirementService.getById(this.id).subscribe(data => {
      this.requirement= data;
    });
  }

  public delete(){

    this.RequirementService.delete(this.requirement.RequirementID).subscribe(data => {
      this.router.navigate(['/requirements-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = error.error.Message;
      this.type = 'danger';
    });
  }
}
