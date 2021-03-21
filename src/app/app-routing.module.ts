import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListUserDetailComponent } from './components/social-media/list-user-detail/list-user-detail.component';
import { ListUsersComponent } from './components/social-media/list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'list-user-detail/:id', component: ListUserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
