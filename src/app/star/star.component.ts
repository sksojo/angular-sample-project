import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  public starIcon: string

  constructor() {
  }

  ngOnInit() {
    this.starIcon = this.isSelected ?  "star" : "star-half"
  }

  starClick(){
    this.isSelected = !this.isSelected
    return this.starIcon = this.isSelected ?  "star" : "star-half"
  }
}
