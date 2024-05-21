import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './pages/account-home/account-home.component';

const routes: Routes = [
  { path: 'home', component: AccountHomeComponent },
  { path: 'home/:id', component: AccountHomeComponent }, // Add this line for the route with id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
