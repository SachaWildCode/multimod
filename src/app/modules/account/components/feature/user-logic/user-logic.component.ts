import { Component } from '@angular/core';
import { UserService } from '../../../../../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-user-logic',
  templateUrl: './user-logic.component.html',
  styleUrl: './user-logic.component.css',
})
export class UserLogicComponent {
  public user!: User;
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      if (userId) {
        this.UserService.getUserById(Number(userId)).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (err) => {
            console.error('Error fetching user:', err);
          },
        });
      } else {
        this.UserService.getRandomUser().subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (err) => {
            console.error('Error fetching random user:', err);
          },
        });
      }
    });
  }
}
