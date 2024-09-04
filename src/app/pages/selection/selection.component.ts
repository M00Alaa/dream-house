import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  current = 0;

  selectedPlace: number = 0;
  selectedHouse: number = 0;

  constructor(private router: Router) { }


  selectCard(value: number) {
    this.selectedPlace = value;
  }

  submit() {
    console.log('place', this.selectedPlace, ' house ', this.selectedHouse);

    this.router.navigate(['/prob']);
  }

  getSelectionValue() {
    return {
      selectedPlace: this.selectedPlace,
      selectedHouse: this.selectedHouse
    };
  }
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }
}
