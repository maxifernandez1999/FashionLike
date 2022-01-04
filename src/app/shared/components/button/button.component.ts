import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('html') html: string;
  @Input('class') class: string;
  @Input('path') path: string;
  constructor() {}

  ngOnInit(): void {}

}
