import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { message: string };
    this.errorMessage = state?.message || 'Une erreur inattendue est survenue.';
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
