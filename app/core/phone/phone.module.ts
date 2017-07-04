import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { PhoneService } from 'core/phone/phone.service';

// Define the `core.phone` module
@NgModule({
  imports: [ HttpModule ],
  providers: [ PhoneService ]
})
export class PhoneModule { }
