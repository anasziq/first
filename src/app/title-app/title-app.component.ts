import { Component, OnInit, Input, wtfCreateScope } from '@angular/core';

@Component({
  selector: 'app-title-app',
  templateUrl: './title-app.component.html',
  styleUrls: ['./title-app.component.scss']
})
export class TitleAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() tit : String;
  @Input() wt;

}
