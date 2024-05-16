import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAdminComponent } from '../../src/app/models/admin/pages/account-admin/account-admin.component';

const routes: Routes = [{ path: 'home', component: AccountAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
