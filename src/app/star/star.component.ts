import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  public starIcon: string

  constructor() {
  }

  ngOnInit() {
    this.starIcon = this.isSelected ?  "star" : "star-half"
  }

  starClick(){
    this.isSelected = !this.isSelected
    this.click.emit({newValue: this.isSelected});
    return this.starIcon = this.isSelected ?  "star" : "star-half"
  }
}

export interface favoriteChangeArgs{
  newValue: boolean;
}
