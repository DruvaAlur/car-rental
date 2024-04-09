import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { AuthServiceService } from '../../auth-service.service';import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  signUpForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public authService: AuthServiceService,
    private router:Router
  ) {
    this.signUpForm = this.formBuilder.group({
      email:this.formBuilder.control('',Validators.required),
      password:this.formBuilder.control('',Validators.required),
      lastname:this.formBuilder.control('',Validators.required),
      firstname:this.formBuilder.control('',Validators.required),
    })
  }

  ngOnInit(){
    this.socialAuthService.authState.subscribe((user:any) => {
      localStorage.setItem('userObject', JSON.stringify(user));
      console.log(user)
    });
    
  console.log('signup child initialized');
  }
  
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  backToLogin(){
    this.authService.loginCompFlag.next(true)
  }

  signUp(){
    if(!this.signUpForm.valid){
      return
    }
    this.authService.signUp(this.signUpForm.value).subscribe((res:any)=>{
      if(res.token){
        this.router.navigate(['/dashboard'])
      }
    })
  }
}
