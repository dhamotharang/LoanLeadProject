import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {User} from '../../model/user';
import {Role} from '../../model/role';
import {UserService} from '../../core/services/user.service';
import {RoleService} from '../../core/services/role.service';
import {BranchService} from '../../core/services/branch.service';
import {Branch} from '../../model/branch';

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  file = null;

  userId: number;
  user: User;
  roles$: Observable<Role[]>;
  branches$: Observable<Branch[]>;
  formGroup: FormGroup = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    optionalPhoneNumber: new FormControl(''),
    roles: new FormControl([''], Validators.required),
    branches: new FormControl([''], Validators.required)
  });

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private branchService: BranchService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.roles$ = this.roleService.getAllRoles();
    this.branches$ = this.branchService.getAllBranches();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.userId = Number.parseInt(paramMap.get('userId'), 10);

      if (this.userId) {
        this.userService.getUser(this.userId).subscribe((user: User) => {
          this.user = user;
          this.formGroup.patchValue({
            employeeId: user.employeeId,
            password: user.password,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            optionalPhoneNumber: user.optionalPhoneNumber,
            roles: user.roles,
            branches: user.branches
          });
        });
      }
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
    const form = document.querySelector('form');

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
      formData.append('employeeId', this.formGroup.get('employeeId').value);
      formData.append('password', this.formGroup.get('password').value);
      formData.append('fullName', this.formGroup.get('fullName').value);
      formData.append('email', this.formGroup.get('email').value);
      formData.append('phoneNumber', this.formGroup.get('phoneNumber').value);
      formData.append('optionalPhoneNumber', this.formGroup.get('optionalPhoneNumber').value);
      this.formGroup.get('roles').value.forEach((role) => formData.append('roles', role));
      this.formGroup.get('branches').value.forEach((branch) => formData.append('branches', branch));

      if (this.userId) {
        formData.append('id', this.user.id.toString());
      }
      if (!this.file) {
        formData.append('picturePath', this.user.picturePath);
      }

      const observable: Observable<User> = this.userService.save(formData);
      observable
        .subscribe((data: User) => {
          this.router.navigate(['/admin/users']);
        }, () => {
          alert('Error while saving user');
        });
    }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }

}
