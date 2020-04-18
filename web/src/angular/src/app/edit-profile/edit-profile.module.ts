import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigationModule} from '../ui/navigation/navigation.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {EditProfileComponent} from './edit-profile.component';

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    ReactiveFormsModule,
    NavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class EditProfileModule { }
