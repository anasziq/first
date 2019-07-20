import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pic-app',
  templateUrl: './pic-app.component.html',
  styleUrls: ['./pic-app.component.scss']
})
export class PicAppComponent implements OnInit {

  constructor() { }
  element: HTMLElement;
  @Input() url ;
 
  ngOnInit() {
 
  }
 
 

}
