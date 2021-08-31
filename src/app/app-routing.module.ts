import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent , canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent , canActivate:[RouteGuardService]},
  { path: 'documentation', component: DocumentationComponent , canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent , canActivate:[RouteGuardService]},
  { path: 'todo/:id', component: TodoComponent , canActivate:[RouteGuardService]},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
