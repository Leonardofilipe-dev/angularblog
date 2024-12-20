import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerMainComponent } from './components/container-main/container-main.component';
import { ContainerSmallComponent } from './components/container-small/container-small.component';
import { FooterComponent } from './components/footer/footer.component';


import { PageModule } from './shared/page/page.module';



@NgModule({
  declarations: [
    AppComponent,
    ContainerMainComponent,
    ContainerSmallComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Declarando o modulo
    PageModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
