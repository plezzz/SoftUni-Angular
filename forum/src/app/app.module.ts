import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';
import {MainComponent} from './main/main.component';
import {ThemeModule} from './theme/theme.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ThemeModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
