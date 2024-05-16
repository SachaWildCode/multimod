import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccountAdminComponent } from './pages/account-admin/account-admin.component';
import { AdminLogicComponent } from './components/feature/admin-logic/admin-logic.component';
import { AdminShowComponent } from './components/ui/admin-show/admin-show.component';

@NgModule({
  declarations: [
    AdminLogicComponent,
    AdminShowComponent,
    AccountAdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
