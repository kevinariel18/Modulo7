import { Component, OnInit } from "@angular/core";
import { CourseInfoComponent } from "../../components/course-info/course-info";
import { Course } from "../../model/course";
import { CourseService } from "../../services/course.service";
import { StudentListComponent } from "../../components/student-list/student-list";



@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseInfoComponent, StudentListComponent],
  templateUrl: './learning.component.html'
})
export class LearningComponent implements OnInit {
  course!: Course;

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
