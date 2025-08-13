import { Component, Input } from '@angular/core';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'customer-view',
  imports: [],
  templateUrl: './customer-view.html',
  
})
export class CustomerView {
  @Input()customer!:Customer

}
