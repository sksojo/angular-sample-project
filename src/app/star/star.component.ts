import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  public isFavorite: boolean;
  public starIcon: string

  constructor() {
  }

  ngOnInit() {
    this.starIcon = "star-half";
  }

  starClick(){
    this.isFavorite = !this.isFavorite
    return this.starIcon = this.isFavorite ?  "star" : "star-half"
  }
}
