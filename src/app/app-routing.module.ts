import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ContactComponent } from './nav/contact/contact.component';


const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'contact', component: ContactComponent },
  { path : 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
