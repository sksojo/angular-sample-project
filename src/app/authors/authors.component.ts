import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {
  title = "List of authors";
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  getTitle(){
    return this.title
  }

  ngOnInit() {
  }

}
