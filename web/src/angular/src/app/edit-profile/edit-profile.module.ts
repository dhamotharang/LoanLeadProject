import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserNavigationModule} from '../ui/user-navigation/user-navigation.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {AdminNavigationModule} from '../ui/admin-navigation/admin-navigation.module';
import {EditProfileComponent} from './edit-profile.component';

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    ReactiveFormsModule,
    UserNavigationModule,
    AdminNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class EditProfileModule { }
