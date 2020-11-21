import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from './aside/aside.component';
import {LoaderComponent} from './loader/loader.component';

const components = [
  AsideComponent,
  LoaderComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
