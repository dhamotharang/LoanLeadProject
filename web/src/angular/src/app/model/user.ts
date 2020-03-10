import {Role} from "./role";
import {Branch} from "./branch";

export interface User {
  id: number;
  employeeId: string;
  phoneNumbersId: string;
  password: string;
  fullName: string;
  email: string;
  status: string;
  picturePath: string;
  updatedAt: string;
  statusChangeTimestamp: string;
  createdAt: string;
  roles: Role[];
  branches: Branch[];
}
