import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input() isFavorite: boolean;
  public starIcon: string

  constructor() {
  }

  ngOnInit() {
    this.starIcon = this.isFavorite ?  "star" : "star-half"
  }

  starClick(){
    this.isFavorite = !this.isFavorite
    return this.starIcon = this.isFavorite ?  "star" : "star-half"
  }
}
