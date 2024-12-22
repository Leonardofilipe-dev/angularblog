import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AppComponent } from './app.component';
import { WorkUsComponent } from './pages/work-us/work-us.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {
    path:'reservas',
    component:ContentComponent
  },
  {path:'trabalhe-conosco',
   component:WorkUsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
