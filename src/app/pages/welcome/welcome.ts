import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  standalone: true,
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
   imports: [FormsModule],
})
export class WelcomeComponent {
  name = '';

  private userService = inject(UserService);
  private router = inject(Router);

  submit() {
    if (this.name.trim()) {
      this.userService.setName(this.name);
      this.router.navigate(['/']);
    }
  }
}
