import {Role} from "./role";
import {Branch} from "./branch";
import {PhoneNumber} from "./phone-number";

export interface User {
  id: number;
  employeeId: string;
  phoneNumber: string;
  optionalPhoneNumber: string;
  password: string;
  fullName: string;
  email: string;
  createdAt?: string;
  roles: string[];
  branches: string[];
  picturePath?: string;
}
