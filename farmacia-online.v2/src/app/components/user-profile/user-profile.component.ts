import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  standalone: false
})
export class UserProfileComponent {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['Samuel Pérez', [Validators.required]],
      email: ['samuel@pharmashop.com', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validators: this.passwordsMatchValidator });
  }

  // Validador personalizado a nivel de formulario
  passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Formulario válido:', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  // Ayuda para ver errores en el HTML
  get passwordMismatch(): boolean {
    return this.profileForm.hasError('passwordsMismatch') &&
           this.profileForm.get('confirmPassword')?.touched!;
  }
}
