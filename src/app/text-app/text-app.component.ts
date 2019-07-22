import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-app',
  templateUrl: './text-app.component.html',
  styleUrls: ['./text-app.component.scss']
})
export class TextAppComponent implements OnInit {

  constructor() { }
  element=document.getElementById('ts') as HTMLElement;
  @Input()wt ;
  ngOnInit() {

  }
  @Input() text :string;
  change(){
    alert(this.wt);
    this.element.style.width = (this.wt-20) +'px';

  }
}
