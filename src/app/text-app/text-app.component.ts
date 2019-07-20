import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-app',
  templateUrl: './text-app.component.html',
  styleUrls: ['./text-app.component.scss']
})
export class TextAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() text :string;

}
