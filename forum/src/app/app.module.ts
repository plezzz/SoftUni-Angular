import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MainComponent} from './main/main.component';
import {ThemeModule} from './theme/theme.module';
import {PostModule} from './post/post.module';
import {HomeComponent} from './home/home.component';
import {UserModule} from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule,
    PostModule.forRoot(),
    UserModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
