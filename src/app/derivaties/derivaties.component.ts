import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derivaties',
  templateUrl: './derivaties.component.html',
  styleUrls: ['./derivaties.component.sass']
})
export class DerivatiesComponent implements OnInit {

  public courses = [];
  public viewMode = 'map'
  constructor() { }

  ngOnInit() {
    this.courses = ["course1", "course2"]
  }
}
