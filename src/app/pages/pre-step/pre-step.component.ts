import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-step',
  templateUrl: './pre-step.component.html',
  styleUrls: ['./pre-step.component.scss']
})
export class PreStepComponent {
  selectedValue: number = 0;
  public projectName: string = '';

  constructor(private router: Router) { }

  selectCard(value: number) {
    this.selectedValue = value;
  }

  getPreStepValue() {
    return this.projectName;
  }

  createProject() {
    console.log(this.projectName);
    this.router.navigate(['/selection']);
  }
}
