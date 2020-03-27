import {Component, OnInit} from '@angular/core';
import {LoanProduct} from '../../model/loan-product';
import {Observable} from 'rxjs';
import {Customer} from "../../model/customer";
import {LoanService} from "../../core/services/loan.service";
import {CustomerService} from "../../core/services/customer.service";
import {LoanProductService} from "../../core/services/loan-product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Loan} from "../../model/loan";

const toSpaceBetween = (s: string): string => {
  return s.replace(
    /[A-Z]/g,
    (c: string) => ` ${c.toLowerCase()}`
  );
};

@Component({
  selector: 'eim-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  loanId: number;
  loanProducts: LoanProduct[];
  customers: Customer[];
  formGroup: FormGroup;
  loan: Loan;

  matchingCustomers: Customer[];

  constructor(
    private loanService: LoanService,
    private customerService: CustomerService,
    private loanProductService: LoanProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      type: [''],
      amount: [''],
      tenure: [''],
      customer: [''],
      loanProduct: [''],
      securityTypes: ['']
    }, {
      validators: Validators.required
    });

    this.loanProductService.getAllLoanProducts().subscribe((loanProducts: LoanProduct[]) => {
      this.loanProducts = loanProducts;
    });
    const customers$: Observable<Customer[]> = this.customerService.getAllCustomers();

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.loanId = Number.parseInt(paramMap.get('loanId'), 10);

      if (this.loanId) {
        this.loanService.find(this.loanId).subscribe(loan => {
          this.loan = loan;
          this.formGroup.patchValue({
            type: loan.type,
            amount: loan.amount,
            tenure: loan.tenure,
            customer: loan.customer,
            loanProduct: loan.loanProduct.id,
            securityTypes: loan.securityTypes
          });

          customers$.subscribe((customers: Customer[]) => {
            this.customers = customers;
            this.matchingCustomers = customers.filter(customer => customer.name === loan.customer);
          });
        });
      } else {
        customers$.subscribe((customers: Customer[]) => {
          this.customers = this.matchingCustomers = customers;
        });
      }
    });
  }

  validate(): boolean {
    let valid = true;
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((field) => {
      valid = this.validateFormControl(field);
    });

    return valid;
  }

  setCustomer(customer: string) {
    this.formGroup.get('customer').setValue(customer);
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
          case 'notExists':
            labelContent = `This ${toSpaceBetween(field)} does not exist`;
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

  filterCustomers() {
    this.matchingCustomers = this.customers.filter(customer => customer.name.indexOf(this.formGroup.get('customer').value) > -1);
  }

  customerExists() {
    const control = this.formGroup.get('customer');
    if (!control.errors && control.value) {
      if (!this.customers.find(customer => customer.name === control.value)) {
        if (control.errors) {
          control.errors.notUnique = {notExists: true};
        } else {
          control.setErrors({notExists: true});
        }
      } else {
        if (control.errors) {
          delete control.errors.notExists;
        }
      }

      this.validateFormControl('customer');
    }
  }

  submit() {
    if (this.validate()) {
      const loan: Loan = {
        type: this.formGroup.get('type').value,
        tenure: this.formGroup.get('tenure').value,
        amount: this.formGroup.get('amount').value,
        customer: this.formGroup.get('customer').value,
        loanProduct: this.loanProducts.find(loanProduct => loanProduct.id === Number.parseInt(this.formGroup.get('loanProduct').value, 10)),
        securityTypes: this.formGroup.get('securityTypes').value
      };

      if (this.loan) {
        loan.id = this.loan.id;
        loan.role = this.loan.role;
        loan.stagedAt = this.loan.stagedAt;
        loan.receiveTimestamp = this.loan.receiveTimestamp;
        loan.deferStage = this.loan.deferStage;
        loan.typeChanged = this.loan.typeChanged;
        loan.status = this.loan.status;
        loan.comment = this.loan.comment;
      } else {
        loan.status = 'Created';
      }

      const observable: Observable<Loan> = this.loanService.save(loan);

      observable
        .subscribe((data: Loan) => {
          this.router.navigate(['/user/dashboard']);
        }, () => {
          alert('Error while saving loan product');
        });
    }
  }

}
