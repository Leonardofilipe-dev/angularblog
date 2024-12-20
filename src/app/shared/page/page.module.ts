import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContainerMainComponent } from '../../components/container-main/container-main.component';
import { ContainerSmallComponent } from '../../components/container-small/container-small.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ContainerMainComponent,
    ContainerSmallComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavbarComponent,
    ContainerMainComponent,
    ContainerSmallComponent
  ]
})
export class PageModule { }
