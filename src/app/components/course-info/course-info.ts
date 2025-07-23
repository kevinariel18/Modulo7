import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [],
  templateUrl: './course-info.html'
})
export class CourseInfoComponent {
  @Input() course!: Course;
}
