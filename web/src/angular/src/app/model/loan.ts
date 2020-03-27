import {User} from './user';
import {Role} from './role';
import {Customer} from './customer';
import {LoanProduct} from './loan-product';

export interface Loan {
  id?: number;
  type: string;
  amount: number;
  tenure: number;
  status?: string;
  comment?: string;
  typeChanged?: boolean;
  receiveTimestamp?: string;
  securityTypes: string[];
  createdAt?: string;
  deferStage?: number;
  stagedAt?: string;
  customer: string;
  loanProduct: LoanProduct;
  user?: User;
  role?: Role;
}
