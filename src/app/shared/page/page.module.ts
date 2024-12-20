import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContainerMainComponent } from '../../components/container-main/container-main.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ContainerMainComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavbarComponent,
    ContainerMainComponent
  ]
})
export class PageModule { }
