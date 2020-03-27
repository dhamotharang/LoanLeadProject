import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoanProduct} from '../../model/loan-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoanProductService} from '../../core/services/loan-product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-loan-product-form',
  templateUrl: './loan-product-form.component.html',
  styleUrls: ['./loan-product-form.component.scss']
})
export class LoanProductFormComponent implements OnInit {
  loanProductId: number;
  loanProduct: LoanProduct;
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loanProductService: LoanProductService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      loanProduct: [''],
      maxAmount: [''],
      maxTenure: [''],
      timeThreshold: [''],
    }, {
      validators: Validators.required
    });

    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.loanProductId = Number.parseInt(paramMap.get('loanProductId'), 10);

        if (this.loanProductId) {
          this.loanProductService.getLoanProduct(this.loanProductId)
            .subscribe((loanProduct: LoanProduct) => {
              if (loanProduct != null) {
                this.loanProduct = loanProduct;
                this.formGroup.patchValue({
                  loanProduct: loanProduct.loanProduct,
                  maxAmount: loanProduct.maxAmount,
                  maxTenure: loanProduct.maxTenure,
                  timeThreshold: loanProduct.timeThreshold,
                });
              }
            });
        }
      });
  }

  isUnique(fieldType: string): boolean {
    let result = true;
    const control = this.formGroup.get(fieldType);

    if (!control.errors && control.value) {
      this.loanProductService.getLoanProductByField(fieldType, control.value)
        .subscribe((data: LoanProduct) => {
          if (data != null && (!this.loanProductId || data.id !== this.loanProduct.id)) {
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

      this.isUnique('loanProduct');
    }

    if (this.validate()) {
      const loanProduct: LoanProduct = {
        loanProduct: this.formGroup.get('loanProduct').value,
        maxAmount: this.formGroup.get('maxAmount').value,
        maxTenure: this.formGroup.get('maxTenure').value,
        timeThreshold: this.formGroup.get('timeThreshold').value
      };

      if (this.loanProduct) {
        loanProduct.id = this.loanProduct.id;
      }

      const observable: Observable<LoanProduct> = this.loanProductService.save(loanProduct);

      observable
        .subscribe((data: LoanProduct) => {
          this.router.navigate(['/admin/loan_products']);
        }, () => {
          alert('Error while saving loan product');
        });
    }
  }

}
