import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from './home/home.module';
import {EntitiesModule} from './entities/entities.module';
import {BranchesModule} from './branches/branches.module';
import {LoanProductsModule} from './loan-products/loan-products.module';
import {CustomersModule} from './customers/customers.module';
import {UsersModule} from './users/users.module';
import {LoggedUsersModule} from './logged-users/logged-users.module';
import {ReportsModule} from './reports/reports.module';
import {EditProfileModule} from './edit-profile/edit-profile.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuditingModule} from './auditing/auditing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    AuditingModule,
    DashboardModule,
    EntitiesModule,
    BranchesModule,
    LoanProductsModule,
    CustomersModule,
    UsersModule,
    ReportsModule,
    LoggedUsersModule,
    EditProfileModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
