import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';

import { PreStepComponent } from './pre-step/pre-step.component';
import { SelectionComponent } from './selection/selection.component';
import { ProbComponent } from './prob/prob.component';
import { SubmissionComponent } from './submission/submission.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pre-step', component: PreStepComponent },
  { path: 'prob', component: ProbComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'submission', component: SubmissionComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    PreStepComponent,
    SelectionComponent,
    ProbComponent,
    SubmissionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbCarouselModule,
    FormsModule,
    TranslateModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzProgressModule,
    CKEditorModule
  ]
})
export class PagesModule { }
