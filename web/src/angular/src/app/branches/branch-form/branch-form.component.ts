import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Entity} from "../../model/entity";
import {Branch} from "../../model/branch";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntityService} from "../../core/services/entity.service";
import {BranchService} from "../../core/services/branch.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LoanProduct} from "../../model/loan-product";

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss']
})
export class BranchFormComponent implements OnInit {
  entities$: Observable<Entity[]>;

  branchId: number;
  branch: Branch;
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private entityService: EntityService,
    private fb: FormBuilder,
    private branchService: BranchService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.entities$ = this.entityService.getAllEntities();
    this.formGroup = this.fb.group({
      name      : [''],
      entityName: [''],
      type      : [''],
      district  : [''],
      town      : [''],
    }, {
      validators: Validators.required
    });

    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.branchId = Number.parseInt(paramMap.get('branchId'));

        if (this.branchId) {
          this.branchService.getBranch(this.branchId)
            .subscribe((branch: Branch) => {
              if (branch != null) {
                this.branch = branch;
                this.formGroup.patchValue({
                  name      : branch.name,
                  entityName: branch.entityName,
                  type      : branch.type,
                  district  : branch.district,
                  town      : branch.town,
                });
              }
            });
        }
      });
  }

  isUnique(fieldType: string): boolean {
    let result = true;
    const control = this.formGroup.get(fieldType);
    const form = document.querySelector('form');

    if (!control.errors && control.value) {
      this.branchService.getBranchByField(fieldType, control.value)
        .subscribe((data: Branch) => {
          if (data != null && (!this.branchId || data.id != this.branch.id)) {
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

  validate(): boolean {
    let valid = true;
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((field) => {
      valid = this.validateFormControl(field);
    });

    return valid;
  }

  validateFormControl(field: string) {
    let result = true;
    const control = this.formGroup.get(field);
    const input = document.getElementById(field);
    const labelSpan = document
      .querySelector(`#${field} + .feedback`);

    input.classList[control.errors ? 'add' : 'remove']('invalid');
    let labelContent = '';

    if (control.errors) {
      Object.keys(control.errors).forEach((error) => {
        switch (error) {
          case 'required':
            labelContent = 'Please, enter this field';

            break;
          case 'email':
            labelContent = 'Please, enter a valid email';

            break;
          case 'minlength':
            labelContent = 'Please, enter more symbols';

            break;
          case 'maxlength':
            labelContent = 'Please, enter less symbols';

            break;
          case 'notUnique':
            labelContent = `This ${toSpaceBetween(field)} already exists`;

            break;
          case 'pattern':
            if (!control.value.match(/[0-9]+/)) {
              labelContent = 'Digits required';
            } else if (!control.value.match(/[A-Z]+/)) {
              labelContent = 'Uppercase characters required';
            } else {
              labelContent = 'Lowercase characters required';
            }

            break;
          default:
            labelContent = '';

            break;
        }
      });
      result = false;
    }

    labelSpan.textContent = labelContent;
    return result;
  }

  submit() {
    const form = document.querySelector('form');

    if (!form.classList.contains('validated')) {
      form.classList.add('validated');

      this.branchService.getBranchByField('name', this.formGroup.get('name').value);
    }

    if (this.validate()) {
      const branch: Branch = {
        name: this.formGroup.get('name').value,
        entityName: this.formGroup.get('entityName').value,
        type: this.formGroup.get('type').value,
        district: this.formGroup.get('district').value,
        town: this.formGroup.get('town').value,
      };

      if (this.branch) {
        branch.id = this.branch.id;
        branch.createdAt = this.branch.createdAt;
      }

      const observable: Observable<Branch> = this.branchService.save(branch);
      observable
        .subscribe((data: Branch) => {
          this.router.navigate(['/admin/branches']);
        }, () => {
          alert("Error while saving branch");
        });
    }
  }

}
