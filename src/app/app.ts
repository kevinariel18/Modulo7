import { Component } from '@angular/core';
import { LearningComponent } from './componentes/learning/learning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningComponent],
  template: '<app-learning></app-learning>',
})
export class App {}
