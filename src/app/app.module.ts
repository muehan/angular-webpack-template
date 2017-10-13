import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import '../styles/styles.css';



/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
  ) {}
}