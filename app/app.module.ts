import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhoneModule } from 'core/phone/phone.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    PhoneModule
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}