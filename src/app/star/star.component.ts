import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  public starGlyph: {
    id: number,
    name: string
  };
  public dataObj = [{
    name: "star-half",
    id: 0
  },
  {
    name: "star",
    id: 1
  }
]

  constructor() {

  }

  ngOnInit() {
    this.starGlyph = this.dataObj[0];
  }

  starClick(){
    console.log(this.starGlyph);
    let length = this.dataObj.length - 1;
    if(length == this.starGlyph.id)
      return this.starGlyph = this.dataObj[0];

    this.starGlyph = this.dataObj[this.starGlyph.id + 1]
  }
}
