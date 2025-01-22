import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { AuthServiceService } from '../../auth-service.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.socialAuthService.authState
      .pipe(
        switchMap((user: any) => {
          return this.authService.authLogin({ idToken: user.idToken });
        })
      )
      .subscribe((response: any) => {
        if (response.token) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signUpUser() {
    this.authService.loginCompFlag.next(false);
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.token) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
