import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeComponent} from './theme/theme.component';
import {ThemeListComponent} from './theme-list/theme-list.component';
import {SharedModule} from '../shared/shared.module';
import {NewComponent} from './new/new.component';
import {DetailComponent} from './detail/detail.component';
import {ThemeRouterModule} from './theme-routing.module';
import {ThemeListItemComponent} from './theme-list-item/theme-list-item.component';
import {ThemeService} from './theme.service';
import {PostModule} from '../post/post.module';


@NgModule({
  declarations: [
    ThemeComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    NewComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostModule,
    ThemeRouterModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent
  ]
})
export class ThemeModule {
}
