import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-admin-show',
  templateUrl: './admin-show.component.html',
  styleUrl: './admin-show.component.css',
})
export class AdminShowComponent {
  @Input() public users: User[] = [];
}
