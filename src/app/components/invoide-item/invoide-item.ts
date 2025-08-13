import { Component, Input } from '@angular/core';
import { Invoiceltem } from '../../model/Invoiceltem';

@Component({
  selector: 'tr[invoide-item]',
  imports: [],
  templateUrl: './invoide-item.html',
  
})
export class InvoideItem {
  @Input()item!:Invoiceltem

}
