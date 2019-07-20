import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Make your own alarm";
  fcolor ='red';
  fcolor2 = 'blue';
  grad : any;
  name :string;
  body :string;
  uu : string;
  h: boolean =true;
  inputT:string;
  element: HTMLElement;
  
 
  send(){
   this.element=document.getElementById('im1') as HTMLElement;
    this.uu = "assets/img/flag.png";
   
  }
  send2(){
    this.element=document.getElementById('im2') as HTMLElement;
     this.uu = "assets/img/c.png";
     
   }
   send3(){
    this.element=document.getElementById('im3') as HTMLElement;
     this.uu = "assets/img/play.png";
   }
   send4(){
    this.element=document.getElementById('im4') as HTMLElement;
     this.uu = "assets/img/s.png";
   }
 
}
