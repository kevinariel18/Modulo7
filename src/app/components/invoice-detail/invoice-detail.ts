import { Component, Input } from '@angular/core';
import { Invoiceltem } from '../../model/Invoiceltem';
import { InvoideItem } from "../invoide-item/invoide-item";

@Component({
  selector: 'invoice-detail',
  imports: [InvoideItem],
  templateUrl: './invoice-detail.html',
 
})
export class InvoiceDetail {
  @Input()items!:Invoiceltem[]
}
