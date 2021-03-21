import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SocialPostService } from 'src/app/services/core/social-post.service';
import { MediaUsersAction } from 'src/app/store/action/media-users.action';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  isButtonLoading = false;
  constructor(
    private router: Router,
    private socialServicePosts: SocialPostService,
    private store: Store,
  ) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

  ngOnInit(): void {
  }


  // Submit Button
  signIn() {
    this.isButtonLoading = true;
    if (this.loginFormGroup.controls.username.value === 'admin' && this.loginFormGroup.controls.password.value === 'pass') {
      this.onSuccess();
      this.router.navigate(['/list-users']);
    } else {
      this.isButtonLoading = false;
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Username or password is invalid!',
        showConfirmButton: true,
        confirmButtonColor: '#F27474'
      });
    }
  }

  onSuccess() {
    this.socialServicePosts.getAllSocailMediaUsers().subscribe((response: any) => {
      if (response) {
        this.isButtonLoading = false;
        this.store.dispatch(new MediaUsersAction(response));
      }
    });
  }
}