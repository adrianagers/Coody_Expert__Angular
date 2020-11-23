import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private router: Router

  ) {
    this.validator()
  }
  ngOnInit(): void {
  }
  validator() {
    this.loginForm = this.FormBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  login() {

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser) => {
          this.storageService.saveToken(dataUser['token'])
          const infoUser = this.storageService.dataUser()
        },
        (error) => {
          console.error('Error ->', error)
        }
      )
    } else {
      alert('Debes llenar todos los campos ')
    }
  }
}
