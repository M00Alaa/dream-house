import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreStepComponent } from '../pre-step/pre-step.component';
import { SelectionComponent } from '../selection/selection.component';
import { ProbComponent } from '../prob/prob.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(PreStepComponent) preStepComponent!: PreStepComponent;
  @ViewChild(SelectionComponent) selectionComponent!: SelectionComponent;
  @ViewChild(ProbComponent) probComponent!: ProbComponent;

  current = 0;

  HouseData = {}

  constructor(private route: ActivatedRoute) {

    this.route.url.subscribe(params => {
      console.log(params[0].path);

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
    });

  }

  collectValues() {
    if (this.current === 0 && this.preStepComponent) {
      const preStepValue = this.preStepComponent.projectName;
      console.log(preStepValue);
    }
    if (this.current === 1 && this.selectionComponent) {
      const selectionValue = this.selectionComponent.getSelectionValue();
      console.log(selectionValue);
    }
    if (this.current === 2 && this.probComponent) {
      const probValue = this.probComponent.getProbValue();
      console.log(probValue);
    }
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
