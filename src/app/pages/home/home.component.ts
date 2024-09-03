import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedValue: number = 0;
  projectName: string = '';

  selectCard(value: number) {
    this.selectedValue = value;
  }

  createProject() {
    console.log(this.projectName);
  }
}
