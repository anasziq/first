import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Make your own alarm";
  fcolor = "hello";
  print(){
    alert(this.fcolor);
  }
   watchColorPicker() {
     alert("yes");
    var myElement = document.querySelector("#rrr");
    myElement.setAttribute("style", "background :red; ");
    
  }
 
}
