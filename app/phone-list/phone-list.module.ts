import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PhoneModule } from 'core/phone/phone.module';
import { PhonesComponent } from 'phone-list/phones.component';
import { PhoneComponent } from 'phone-list/phone.component';

@NgModule({
  imports: [ PhoneModule, CommonModule ],
  entryComponents: [ PhonesComponent, PhoneComponent ],
  declarations: [ PhonesComponent, PhoneComponent ]
})
export class PhoneListModule { }