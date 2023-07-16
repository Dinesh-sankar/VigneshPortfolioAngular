import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WebDeveloperComponent } from './web-developer/web-developer.component';


const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'web-developer', component: WebDeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
