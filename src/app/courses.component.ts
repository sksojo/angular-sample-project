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
    <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
          <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="buttonClicked">Random button</button>
        </tr>
    </table>
  `
})

export class CoursesComponent {
  title = "List of courses";
  source = "https://picsum.photos/id/237/200/300";
  colSpan = "3";
  isActive = true;
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  buttonClicked($event) {
    console.log("Button clicked" + $event)
  }

  getTitle() {
    return this.title;
  }
}
