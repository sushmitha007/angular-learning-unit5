import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetModule } from './reset/reset.module';
import { OurComponentComponent } from './our-component/our-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OurComponentComponent
  ],
  imports: [
    ResetModule,

    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
