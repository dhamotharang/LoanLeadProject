import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {UserService} from '../core/services/user.service';
import {LoanService} from '../core/services/loan.service';
import {Loan} from '../model/loan';
import {Role} from '../model/role';
import {RoleService} from '../core/services/role.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'eim-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser$: Observable<User>;
  forwardedLoans$: Observable<Loan[]>;
  receivedLoans$: Observable<Loan[]>;
  userBranches: string[];
  loanToAction: Loan;
  roles: Role[];

  comment: FormControl = new FormControl('');
  deferStage: FormControl = new FormControl('');

  constructor(private userService: UserService, private loanService: LoanService, private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.userService.getCurrentUser();
    this.forwardedLoans$ = this.loanService.getForwardedLoans();
    this.receivedLoans$ = this.loanService.getReceivedLoans();
    this.roleService.getAllRoles().subscribe((roles: Role[]) => { this.roles = roles; });
  }

  setLoanToAction(loan: Loan) {
    this.loanToAction = loan;
  }

  action(deferred?: boolean) {
    if (deferred) {
      this.loanToAction.role = this.roles.find(role => role.id === Number.parseInt(this.deferStage.value, 10));
    }

    this.loanToAction.comment = this.comment.value;
    this.loanService.save(this.loanToAction).subscribe(() => {
      this.forwardedLoans$ = this.loanService.getForwardedLoans();
      this.receivedLoans$ = this.loanService.getReceivedLoans();
    });
  }

  receive(loanId: number) {
    this.loanService.receiveLoan(loanId).subscribe(() => {
      this.forwardedLoans$ = this.loanService.getForwardedLoans();
      this.receivedLoans$ = this.loanService.getReceivedLoans();
    });
  }

  updateStatus(status: string, loan: Loan) {
    loan = JSON.parse(JSON.stringify(loan));
    loan.status = status;
    this.loanToAction = loan;
  }

  forward(loan: Loan) {
    loan = JSON.parse(JSON.stringify(loan));
    loan.status = 'Forwarded';
    loan.role = this.roles.find(role => role.id === this.stageToForward(loan));
    this.loanToAction = loan;
  }

  defer(loan: Loan) {
    loan = JSON.parse(JSON.stringify(loan));
    this.deferStage.setValue(loan.role.id > 6 ? '6' : '1');
    loan.status = 'Deferred';
    loan.deferStage = loan.role.id;
    this.loanToAction = loan;
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }

  stageToForward(loan: Loan) {
    if (loan.type === 'Deduction At Source') {
      if (loan.role.id === 1) {
        return 3;
      } else if (loan.role.id === 3) {
        return 5;
      } else if (loan.role.id === 5) {
        return 9;
      } else {
        return loan.role.id + 1;
      }
    } else {
      if (loan.amount < 3000000) {
        if (loan.role.id < 3) {
          return loan.role.id + 1;
        } else if (loan.role.id === 3) {
          return 5;
        } else if (loan.role.id === 5) {
          return 8;
        } else {
          return loan.role.id + 1;
        }
      } else if (loan.amount < 10000000) {
        if (loan.role.id < 5) {
          return loan.role.id + 1;
        } else if (loan.role.id === 5) {
          return 8;
        } else {
          return loan.role.id + 1;
        }
      } else {
        return loan.role.id + 1;
      }
    }
  }
}
