import { ErrorHandler,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoute } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { GlobalErrorHandlerService } from './core/services/global-error-handler.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute,{ useHash: true }),

  ],
  providers: [
    GlobalErrorHandlerService,
    // { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
