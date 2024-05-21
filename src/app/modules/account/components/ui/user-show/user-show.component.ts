import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrl: './user-show.component.css',
})
export class UserShowComponent {
  @Input() user!: User;
}
