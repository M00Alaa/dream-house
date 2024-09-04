import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  current = 0;

  HouseData = {}

  constructor(private route: ActivatedRoute) {

    console.log(this.route.url.subscribe(params => {
      console.log(params[0].path);
      // if (this.HouseData == null) {

      if (params[0].path === 'pre-step') {
        this.current = 0;
      }

      if (params[0].path === 'selection') {
        this.current = 1;
      }

      if (params[0].path === 'prob') {
        this.current = 2;
      }

      if (params[0].path === 'submission') {
        this.current = 3;
      }
      // }
      // else {
      //   this.current = 0
      // }
    }));

  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    console.log('done');
  }

}
