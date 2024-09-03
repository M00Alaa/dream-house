import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  selectedValue: number = 0;

  constructor(private router: Router) { }

  selectCard(value: number) {
    this.selectedValue = value;
    // console.log(this.selectedValue);
    // this.router.navigate(['/pre-step']);
  }

  createProject() {
    console.log(this.selectedValue);
    this.router.navigate(['/prob']);
  }
}
