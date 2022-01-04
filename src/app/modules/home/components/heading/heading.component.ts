import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input('content') content:string;
  @Input('span') span:string;
  @Input('class') class:string;
  constructor() { }

  ngOnInit(): void {
  }

}
