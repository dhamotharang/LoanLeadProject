import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Urls} from './config/routes/constants';
import {BranchFormComponent} from './branches/branch-form/branch-form.component';
import {BranchesComponent} from './branches/branches.component';
import {EntityFormComponent} from './entities/entity-form/entity-form.component';
import {EntitiesComponent} from './entities/entities.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {UsersComponent} from './users/users.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerFormComponent} from './customers/customer-form/customer-form.component';
import {LoanFormComponent} from './dashboard/loan-form/loan-form.component';
import {LoanProductsComponent} from './loan-products/loan-products.component';
import {LoanProductFormComponent} from './loan-products/loan-product-form/loan-product-form.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportsComponent} from './reports/reports.component';
import {AuditingComponent} from './auditing/auditing.component';
import {LoggedUsersComponent} from './logged-users/logged-users.component';

const userRoutes: Routes = [
  {path: Urls.LOAN_FORM, component: LoanFormComponent, pathMatch: 'full'},
  {path: Urls.LOAN_FORM + '/:loanId', component: LoanFormComponent, pathMatch: 'full'},
  {path: Urls.CUSTOMERS, component: CustomersComponent, pathMatch: 'full'},
  {path: Urls.CUSTOMER_FORM, component: CustomerFormComponent, pathMatch: 'full'},
  {path: Urls.CUSTOMER_FORM + '/:customerId', component: CustomerFormComponent, pathMatch: 'full'},
  {path: Urls.DASHBOARD, component: DashboardComponent, pathMatch: 'full'},
  {path: Urls.AUDITING + '/:loanId', component: AuditingComponent, pathMatch: 'full'},
];

const adminRoutes: Routes = [
  {path: Urls.ENTITIES, component: EntitiesComponent, pathMatch: 'full'},
  {path: Urls.ENTITY_FORM, component: EntityFormComponent, pathMatch: 'full'},
  {path: Urls.ENTITY_FORM + '/:entityId', component: EntityFormComponent, pathMatch: 'full'},
  {path: Urls.BRANCHES, component: BranchesComponent, pathMatch: 'full'},
  {path: Urls.BRANCH_FORM, component: BranchFormComponent, pathMatch: 'full'},
  {path: Urls.BRANCH_FORM + '/:branchId', component: BranchFormComponent, pathMatch: 'full'},
  {path: Urls.USERS, component: UsersComponent, pathMatch: 'full'},
  {path: Urls.USER_FORM + '/:userId', component: UserFormComponent, pathMatch: 'full'},
  {path: Urls.LOAN_PRODUCTS, component: LoanProductsComponent, pathMatch: 'full'},
  {path: Urls.LOAN_PRODUCT_FORM, component: LoanProductFormComponent, pathMatch: 'full'},
  {path: Urls.LOAN_PRODUCT_FORM + '/:loanProductId', component: LoanProductFormComponent, pathMatch: 'full'},
  {path: Urls.PROFILE_EDIT, component: EditProfileComponent, pathMatch: 'full'},
  {path: Urls.HOME, component: HomeComponent, pathMatch: 'full'},
  {path: Urls.REPORTS, component: ReportsComponent, pathMatch: 'full'},
  {path: Urls.LOGGED_USERS, component: LoggedUsersComponent, pathMatch: 'full'}
];

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  ...adminRoutes,
  ...userRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
