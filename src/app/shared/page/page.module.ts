import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContainerMainComponent } from '../../components/container-main/container-main.component';
import { ContainerSmallComponent } from '../../components/container-small/container-small.component';
import { ContainerMapComponent } from '../../components/container-map/container-map.component';
import { FooterComponent } from '../../components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ContainerMainComponent,
    ContainerSmallComponent,
    ContainerMapComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavbarComponent,
    ContainerMainComponent,
    ContainerSmallComponent,
    ContainerMapComponent,
    FooterComponent
  ]
})
export class PageModule { }
