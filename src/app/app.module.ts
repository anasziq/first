import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { TextAppComponent } from './text-app/text-app.component';
import { PicAppComponent } from './pic-app/pic-app.component';
import { TitleAppComponent } from './title-app/title-app.component';
import { CssCodeComponent } from './css-code/css-code.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAppComponent,
    PicAppComponent,
    TitleAppComponent,
    CssCodeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
