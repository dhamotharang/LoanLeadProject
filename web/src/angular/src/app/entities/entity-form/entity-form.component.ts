import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Entity} from "../../model/entity";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EntityService} from "../../core/services/entity.service";
import {Observable} from "rxjs";
import {LoanProduct} from "../../model/loan-product";

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  entityId: number;
  entity: Entity;
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private entityService: EntityService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      shortName: [''],
      boxNumber: [''],
      plotNumber: [''],
      branchesNumber: [''],
      description: [''],
    }, {
      validators: Validators.required
    });

    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.entityId = Number.parseInt(paramMap.get('entityId'));

        if (this.entityId) {
          this.entityService.getEntity(this.entityId)
            .subscribe((entity: Entity) => {
              if (entity != null) {
                this.entity = entity;
                this.formGroup.patchValue({
                  name:  entity.name,
                  shortName:  entity.shortName,
                  boxNumber:  entity.boxNumber,
                  plotNumber:  entity.plotNumber,
                  branchesNumber:  entity.branchesNumber,
                  description:  entity.description,
                });
              }
            });
        }
      });
  }

  validate(): boolean {
    let result = true;
    const controls = this.formGroup.controls;

    if (controls.branchesNumber.value) {
      controls.branchesNumber.setValue(
        controls.branchesNumber.value.toString()
          .replace(/[^0-9]/g, '')
      );
    }

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
      this.entityService.getEntityByField(fieldType, control.value)
        .subscribe((data: Entity) => {
          if (data != null && (!this.entityId || data.id != this.entity.id)) {
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
    const form = document.querySelector('form');

    if (!form.classList.contains('validated')) {
      form.classList.add('validated');
      this.isUnique('name');
    }

    if (this.validate()) {
      const entity: Entity = {
        name: this.formGroup.get('name').value,
        shortName: this.formGroup.get('shortName').value,
        boxNumber: this.formGroup.get('boxNumber').value,
        plotNumber: this.formGroup.get('plotNumber').value,
        branchesNumber: this.formGroup.get('branchesNumber').value,
        description: this.formGroup.get('description').value,
      };

      if (this.entity) {
        entity.id = this.entity.id;
        entity.createdAt = this.entity.createdAt;
      }

      const observable: Observable<Entity> = this.entityService.save(entity);

      observable
        .subscribe((data: Entity) => {
          this.router.navigate(['/admin/entities']);
        }, () => {
          alert("Error while saving entity");
        });
    }
  }

}
