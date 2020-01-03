import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <img [src]="source"/>
  `
})

export class CoursesComponent {
  title = "List of courses";
  source = "https://picsum.photos/id/237/200/300"
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
