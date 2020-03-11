import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Urls} from "./config/routes/constants";
import {BranchFormComponent} from "./branch-form/branch-form.component";
import {BranchesComponent} from "./branches/branches.component";
import {EntityFormComponent} from "./entity-form/entity-form.component";
import {EntitiesComponent} from "./entities/entities.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UsersComponent} from "./users/users.component";
import {CustomersComponent} from "./customers/customers.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {LoanFormComponent} from "./loan-form/loan-form.component";
import {LoanProductsComponent} from "./loan-products/loan-products.component";
import {LoanProductFormComponent} from "./loan-product-form/loan-product-form.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportsComponent} from "./reports/reports.component";
import {AuditingComponent} from "./auditing/auditing.component";

const userRoutes: Routes = [
  {path: Urls.LOAN_FORM, component: LoanFormComponent, pathMatch: 'full'},
  {path: Urls.CUSTOMERS, component: CustomersComponent, pathMatch: 'full'},
  {path: Urls.CUSTOMER_FORM, component: CustomerFormComponent, pathMatch: 'full'},
  {path: Urls.DASHBOARD, component: DashboardComponent, pathMatch: 'full'},
  {path: Urls.REPORTS, component: ReportsComponent, pathMatch: 'full'},
  {path: Urls.AUDITING, component: AuditingComponent, pathMatch: 'full'},
  {path: Urls.USER_HOME, component: UserHomeComponent, pathMatch: 'full'},
];

const adminRoutes: Routes = [
  {path: Urls.ENTITIES, component: EntitiesComponent, pathMatch: 'full'},
  {path: Urls.ENTITY_FORM, component: EntityFormComponent, pathMatch: 'full'},
  {path: Urls.BRANCHES, component: BranchesComponent, pathMatch: 'full'},
  {path: Urls.BRANCH_FORM, component: BranchFormComponent, pathMatch: 'full'},
  {path: Urls.USERS, component: UsersComponent, pathMatch: 'full'},
  {path: Urls.USER_FORM, component: UserFormComponent, pathMatch: 'full'},
  {path: Urls.LOAN_PRODUCTS, component: LoanProductsComponent, pathMatch: 'full'},
  {path: Urls.LOAN_PRODUCT_FORM, component: LoanProductFormComponent, pathMatch: 'full'},
  {path: Urls.PROFILE_EDIT, component: EditProfileComponent, pathMatch: 'full'},
  {path: Urls.ADMIN_HOME, component: AdminHomeComponent, pathMatch: 'full'}
];

const adminEnvironment: Routes = [
  {
    path: Urls.ADMIN,
    component: AdminHomeComponent,
    children: [
      {path: '', redirectTo: Urls.ADMIN_HOME, pathMatch: 'full'},
      ...adminRoutes
    ]
  },
];

const userEnvironment: Routes = [
  {
    path: Urls.USER,
    component: UserHomeComponent,
    children: [
      {path: '', redirectTo: Urls.USER_HOME, pathMatch: 'full'},
      ...userRoutes
    ]
  }
];

const routes: Routes = [
  ...adminEnvironment,
  ...userEnvironment
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
