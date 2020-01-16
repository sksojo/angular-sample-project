import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
/**
 *
 *
 * @export
 * @class DerivatiesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-derivaties',
  templateUrl: './derivaties.component.html',
  styleUrls: ['./derivaties.component.sass']
})
export class DerivatiesComponent implements OnInit {

  public courses = []
  public viewMode = 'map'

  constructor(CoursesService: CoursesService) {
    this.courses = CoursesService.getCourses();
   }

  ngOnInit() {
  }
}
