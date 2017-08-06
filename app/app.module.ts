import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhoneModule } from 'core/phone/phone.module';
import { PhoneListModule } from 'phone-list/phone-list.module.ts';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    PhoneModule,
    PhoneListModule
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}