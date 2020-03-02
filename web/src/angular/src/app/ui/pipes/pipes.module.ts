import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeUrlPipe} from './safe-url.pipe';
import {NgForFilterEveryPipe} from './ng-for-filter-every.pipe';
import {NgForFilterSomePipe} from './ng-for-filter-some.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    NgForFilterEveryPipe,
    NgForFilterSomePipe
  ],
  exports: [
    SafeUrlPipe,
    NgForFilterEveryPipe,
    NgForFilterSomePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
