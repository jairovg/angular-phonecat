import { Input, Component } from '@angular/core';

@Component({
  selector: 'phone',
  template: require('./phone-ng2.template.html')
})
export class PhoneComponent {
  @Input() id: string;
  @Input() imageUrl: string;
  @Input() name: string;
  @Input() snippet: string;

  constructor() {}
}
