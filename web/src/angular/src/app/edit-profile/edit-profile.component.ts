import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../core/services/user.service';
import {Router} from '@angular/router';
import {ServerResp} from "../model/server-resp";

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'loanlead-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  file = null;

  user: User;
  formGroup: FormGroup = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('07[0-9]{8}')]),
    optionalPhoneNumber: new FormControl('', Validators.pattern('07[0-9]{8}')),
  });

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
      this.formGroup.patchValue({
        employeeId: user.employeeId,
        password: user.password,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        optionalPhoneNumber: user.optionalPhoneNumber
      });
    });
  }

  validate(): boolean {
    let result = true;
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((controlName) => {
      result = this.validateFormControl(controlName);
    });

    return result;
  }

  validateFormControl(controlName: string): boolean {
    let result = true;
    const control = this.formGroup.get(controlName);
    const input = document.getElementById(controlName);
    const labelSpan = document
      .querySelector(`#${controlName} + .feedback`);

    input.classList[control.errors ? 'add' : 'remove']('invalid');
    let textContent = '';

    if (control.errors) {
      result = false;

      Object.keys(control.errors).forEach((error) => {
        switch (error) {
          case 'required':
            textContent = 'Please, enter this field';
            break;
          case 'notUnique':
            textContent = `This ${toSpaceBetween(controlName)} already exists`;
            break;
          case 'pattern':
            textContent = `Invalid ${toSpaceBetween(controlName)} format`;
            break;
          default:
            textContent = '';
            break;
        }
      });
    }

    labelSpan.textContent = textContent;

    return result;
  }

  isUnique(fieldType: string): boolean {
    let result = true;
    const control = this.formGroup.get(fieldType);

    if (!control.errors && control.value) {
      this.userService.getUserByField(fieldType, control.value)
        .subscribe((data: User) => {
          if (data != null && data.id !== this.user.id) {
            if (control.errors) {
              control.errors.notUnique = {notUnique: true};
            } else {
              control.setErrors({notUnique: true});
            }
          } else {
            if (control.errors) {
              delete control.errors.notUnique;
            }
          }

          result = this.validateFormControl(fieldType);
        });
    }

    return result;
  }

  submit() {
    if (this.validate()) {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('id', this.user.id.toString());
      formData.append('employeeId', this.formGroup.get('employeeId').value);
      formData.append('password', this.formGroup.get('password').value);
      formData.append('fullName', this.formGroup.get('fullName').value);
      formData.append('email', this.formGroup.get('email').value);
      formData.append('status', this.user.status);
      formData.append('phoneNumber', this.formGroup.get('phoneNumber').value);
      formData.append('optionalPhoneNumber', this.formGroup.get('optionalPhoneNumber').value);
      this.user.roles.forEach(role => formData.append('roles', role));
      this.user.branches.forEach(branch => formData.append('branches', branch));

      if (!this.file) {
        formData.append('picturePath', this.user.picturePath);
      }

      this.userService.save(formData)
        .subscribe((data: ServerResp<User>) => {
          if (!data.err) {
            this.router.navigate(['/home']);
          } else {
            alert('Error while saving user');
          }
        });
    }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }

}
