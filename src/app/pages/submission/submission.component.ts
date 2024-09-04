import { Component } from '@angular/core';


// import translations from 'ckeditor5/translations/ar.js';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {
  current = 0;

  percent = 0;

  constructor() {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        this.percent = index;
        index == 100 ? (this.current = 1) : (this.current = 0);
      }, index * 50);

    }
  }

  next() {
    this.current++;
  }

  pre() {
    this.current--;
  }
}
