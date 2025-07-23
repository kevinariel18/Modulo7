import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.html'
})
export class StudentListComponent {
  @Input() students!: Student[];
}
