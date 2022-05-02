import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from 'src/app/domain/requirement';
import { RequirementService } from 'src/app/service/requirement.service';

@Component({
  selector: 'app-requirements-save',
  templateUrl: './requirements-save.component.html',
  styleUrls: ['./requirements-save.component.css']
})
export class RequirementsSaveComponent implements OnInit {

  public requirement!: Requirement;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public requirementService: RequirementService,
     private router: Router) { }

    
     ngOnInit(): void {
      this.requirement = new Requirement(0, 0, 0, 0, '',  new Date(), 0, new Date(), new Date());
    }

    public save(){

      console.log(this.requirement);

      this.requirementService.save(this.requirement).subscribe(data => {
        this.router.navigate(['/requirements-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }
}
