import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { AuthServiceService } from '../auth-service.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
// import {fadeInRightOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.css'],
  animations: [
    // fadeInRightOnEnterAnimation(),
      // trigger(
      //   'slideView',
      //   [
      //     state('true', style({ transform: 'translateX(100%)', opacity: 0 })),
      //     state('false', style({ transform: 'translateX(0)', opacity: 1 })),
      //     transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
      //     transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
      //   ]),
  
      // trigger('slideInOut', [
      //   transition(':enter', [
      //     style({ transform: 'translateX(100%)', opacity: 0 }),
      //     animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
      //   ]),
        
      //   transition(':leave', [
      //     style({ transform: 'translateX(0%)', opacity: 1 }),
      //     animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
      //   ])
      // ]),
    trigger(
      'slideView',
      [
        state('true', style({  opacity: 0 })),
        state('false', style({ opacity: 1 })),
        transition('0 => 1', animate('600ms', style({ 'opacity': 1 }))),
        transition('1 => 1', animate('600ms', style({  'opacity': 0 }))),
      ]),

    trigger('slideInOut', [
      transition(':enter', [
        style({  opacity: 0 }),
        animate('600ms ease-in', style({  'opacity': 1 }))
      ]),
      
      transition(':leave', [
        style({  opacity: 1 }),
        animate('0ms ease-in', style({  'opacity': 0 }))
      ])
    ])
  ]
})
export class LoginPageComponentComponent {
  loginCompFlag:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public authService: AuthServiceService
  ) {
    this.loginCompFlag=this.authService.loginCompFlag.value
  }

  ngOnInit(){
    console.log('parent initialized');
  }


}
