import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
}) 
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup // Se indica a Angular que el formulario debe aplicar las validaciones que se crearan 

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.Validator()
  }

  ngOnInit(): void {
  }
  Validator() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', ],
      role: ['User', ],
      birthDate: [''],
      age: ['']
    })
  }/* 
  saveUser() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe(
        (userCreated) => {
          console.log(userCreated)
          alert('Usuario creado correctamente')
        },
        (error) => {
          console.error('Tuvimos un eRror ->', error)
        }
      )
    } else {
      alert('El formulario no es valido ')
    }
  } */
}
