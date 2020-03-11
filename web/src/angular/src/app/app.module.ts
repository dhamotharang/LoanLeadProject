import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EntitiesComponent } from './entities/entities.component';
import { BranchesComponent } from './branches/branches.component';
import { CustomersComponent } from './customers/customers.component';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanProductsComponent } from './loan-products/loan-products.component';
import { LoanProductFormComponent } from './loan-product-form/loan-product-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AuditingComponent } from './auditing/auditing.component';
import {UserNavigationModule} from "./ui/user-navigation/user-navigation.module";
import {AdminNavigationModule} from "./ui/admin-navigation/admin-navigation.module";

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    BranchesComponent,
    CustomersComponent,
    EntityFormComponent,
    BranchFormComponent,
    UsersComponent,
    UserFormComponent,
    CustomerFormComponent,
    LoanFormComponent,
    LoanProductsComponent,
    LoanProductFormComponent,
    EditProfileComponent,
    AdminHomeComponent,
    UserHomeComponent,
    DashboardComponent,
    ReportsComponent,
    AuditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserNavigationModule,
    AdminNavigationModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
