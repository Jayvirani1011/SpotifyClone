import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestHandlerInterceptor } from './request-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestHandlerInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
