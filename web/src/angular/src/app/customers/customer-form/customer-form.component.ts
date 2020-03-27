import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../core/services/customer.service";
import {Observable} from "rxjs";

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerId: number;
  customer: Customer;
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      document: [''],
      documentType: [''],
      phoneNumber: [''],
      optionalPhoneNumber: ['', null],
    }, {
      validators: Validators.required
    });

    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.customerId = Number.parseInt(paramMap.get('customerId'));

        if (this.customerId) {
          this.customerService.getCustomer(this.customerId)
            .subscribe((customer: Customer) => {
              if (customer != null) {
                this.customer = customer;
                this.formGroup.patchValue({
                  name:  customer.name,
                  document:  customer.document,
                  documentType:  customer.documentType,
                  phoneNumber:  customer.phoneNumber,
                  optionalPhoneNumber:  customer.optionalPhoneNumber
                });
              }
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
      this.customerService.getCustomerByField(fieldType, control.value)
        .subscribe((data: Customer) => {
          if (data != null && (!this.customerId || data.id != this.customer.id)) {
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
      const customer: Customer = {
        name: this.formGroup.get('name').value,
        document: this.formGroup.get('document').value,
        documentType: this.formGroup.get('documentType').value,
        phoneNumber: this.formGroup.get('phoneNumber').value,
        optionalPhoneNumber: this.formGroup.get('optionalPhoneNumber').value
      };

      if (this.customer) {
        customer.id = this.customer.id;
        customer.createdAt = this.customer.createdAt;
      }

      const observable: Observable<Customer> = this.customerService.save(customer);

      observable
        .subscribe((data: Customer) => {
          this.router.navigate(['/user/customers']);
        }, () => {
          alert("Error while saving customer");
        });
    }
  }

}
