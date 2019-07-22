import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-css-code',
  templateUrl: './css-code.component.html',
  styleUrls: ['./css-code.component.scss']
})
export class CssCodeComponent implements OnInit {
  constructor() { }
 
  @Input() color1='red';
  @Input() color2= 'blue';
  @Input() diric ='to bottom';
  ngOnInit() {
    
  }

}
