import { Component, OnInit, OnDestroy } from '@angular/core';
import { Requirement } from 'src/app/domain/requirement';
import { RequirementService } from 'src/app/service/requirement.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.css']
})
export class RequirementsListComponent implements OnInit, OnDestroy {

  public requirement!: Requirement[];
  public subRequirements!: Subscription;

  constructor(public requirementService: RequirementService) { }

  ngOnDestroy(): void {
    this.subRequirements.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subRequirements! = this.requirementService.getAll().subscribe(data =>{
      this.requirement! = data;
    })

  }

}
