import {Loan} from "./loan";

export interface Customer {
  id?: number;
  documentType: string;
  document: string;
  name: string;
  phoneNumber: string;
  optionalPhoneNumber: string;
  createdAt?: string;
  loans?: Loan[];
}
