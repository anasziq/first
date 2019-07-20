import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-css-code',
  templateUrl: './css-code.component.html',
  styleUrls: ['./css-code.component.scss']
})
export class CssCodeComponent implements OnInit {

  constructor() { }
  @Input() scss:string;
  @Input() color1;
  @Input() color2;
  ngOnInit() {
    
  }

}
