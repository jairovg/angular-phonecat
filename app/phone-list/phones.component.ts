import * as angular from 'angular';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneService, Phone } from 'core/phone/phone.service';
import { downgradeComponent } from '@angular/upgrade/static';

enum OrderBy {
  age,
  name
}

module OrderBy {
  export function getDescription(type: OrderBy): string {
    let typeDescription: string;
    switch (type) {
      case OrderBy.age:
        typeDescription = 'Age';
        break;
      case OrderBy.name:
        typeDescription = 'Name';
        break;
    }

    return typeDescription;
  }
}

@Component({
  selector: 'phones',
  template: require('./phones-ng2.template.html')
})
export class PhonesComponent implements OnInit, OnChanges {
  private phone: PhoneService;
  private originalPhones: Phone[];
  public phones: Phone[];
  @Input() query: string;
  @Input() order: string;

  constructor(phone: PhoneService) {
    this.originalPhones = [];
    this.phones = [];
    this.phone = phone;
  }

  ngOnInit() {
    this.phone
        .query()
        .then((phones: Phone[]) => {
          this.originalPhones = phones;
          this.applyFilters();
        });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyFilters();
  }

  private applyFilters() {
    let orderByFn: string = OrderBy.getDescription(OrderBy[this.order] as OrderBy);
    this.phones = this.originalPhones
                      .filter(this.phonesFilter.bind(this))
                      .sort(this[`orderBy${orderByFn}`].bind(this))
                      ;
  }

  /**
   * Filter phones based on the provided query
   * @param {Phone} phone - Phone to compare
   */
  private phonesFilter(phone: Phone) {
    if (this.query) {
      return this.query && phone.name.toLowerCase().includes(this.query.toLowerCase());
    }

    return true;
  }

  /**
   * Compare function that defines the sort order based on the age
   * @param {Phone} a
   * @param {Phone} b
   */
  private orderByAge(a: Phone, b: Phone): number {
    return a.age - b.age;
  }

  /**
   * Compare function that defines the sort order based on the name
   * @param {Phone} a
   * @param {Phone} b
   */
  private orderByName(a: Phone, b: Phone): number {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  }
}

angular
  .module('phoneList')
  .directive('phones', downgradeComponent({
    component: PhonesComponent
  }));
