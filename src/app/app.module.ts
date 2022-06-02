import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './views/shopping-card/shopping-card.component';

// particular imports for hammer
import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HammerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class AppModule { }
