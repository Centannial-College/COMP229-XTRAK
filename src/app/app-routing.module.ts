import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { AddIncidentComponent } from './content/add-incident/add-incident.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { ListComponent } from './content/list/list.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: ListComponent},
  {path: 'add-incident', component: AddIncidentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }