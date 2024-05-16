import { Component } from '@angular/core';
import { UserService } from '../../../../../shared/user.service';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-admin-logic',
  templateUrl: './admin-logic.component.html',
  styleUrl: './admin-logic.component.css',
})
export class AdminLogicComponent {
  public users: User[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((userList) => {
      this.users = userList;
      console.log(userList);
      console.log(this.users);
    });
  }
}
