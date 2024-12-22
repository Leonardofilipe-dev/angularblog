import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ContainerMainComponent } from './components/container-main/container-main.component';
// import { ContainerSmallComponent } from './components/container-small/container-small.component';
// import { FooterComponent } from './components/footer/footer.component';


import { PageModule } from './shared/page/page.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './pages/content/content.component';
import { WorkUsComponent } from './pages/work-us/work-us.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    WorkUsComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Declarando o modulo
    PageModule,
    HttpClientModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
