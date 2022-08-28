import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberOnlyDirective } from './core/numberOnly/number-only.directive';
import { NumberWith2DecimalDirective } from './core/numberWith2Decimal/number-with2-decimal.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    NumberWith2DecimalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
