import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.scss']
})
export class ProbComponent {
  selectedValue: number = 0;

  constructor(private router: Router) { }

  selectCard(value: number) {
    this.selectedValue = value;
    // console.log(this.selectedValue);
    // this.router.navigate(['/pre-step']);
  }

  createProject() {
    console.log(this.selectedValue);
    this.router.navigate(['/submission']);
  }
}
