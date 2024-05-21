import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UserLogicComponent } from './components/feature/user-logic/user-logic.component';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { UserShowComponent } from './components/ui/user-show/user-show.component';

@NgModule({
  declarations: [UserLogicComponent, AccountHomeComponent, UserShowComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
