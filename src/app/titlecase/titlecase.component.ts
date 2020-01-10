import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.sass']
})
export class TitlecaseComponent implements OnInit {

  public randomString: string
  public strArray = ["tHIs is mIXeD CaSe", "one,two,three", "Hyd is One of the Biggest cities in India"]

  constructor() { }

  ngOnInit() {
    this.randomString = this.strArray[Math.floor(Math.random()*this.strArray.length)];
  }

}
