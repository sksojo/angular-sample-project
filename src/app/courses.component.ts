import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}</h2>
    <button (click)='addCourse()'>Add course</button>
    {{text | summary: 10}}
    <ul>
      <li *ngFor="let course of courses">
        {{course.name}}
      </li>
    </ul>
    <img [src]="source"/>
    <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
          <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="buttonClicked">Random button</button>
        </tr>
    </table>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})

export class CoursesComponent {
  title = "List of courses";
  source = "https://picsum.photos/id/237/200/300";
  email = "me@example.com";
  colSpan = "3";
  isActive = true;
  courses;
  text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  buttonClicked($event) {
    console.log("Button clicked" + $event)
  }

  onKeyUp() {
    console.log(this.email);
  }

  getTitle() {
    return this.title;
  }

  addCourse(){
    this.courses.push({id:4, name: 'course5'});
  }
}
