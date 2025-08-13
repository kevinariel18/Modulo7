import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CustomerView, InvoiceDetail],
  templateUrl: './invoice.html',
  
})
export class InvoiceComponent implements OnInit {
  
  invoice!:Invoice;
  constructor(private servise:InvoiceService){}

  ngOnInit(): void {
    this.invoice=this.servise.getInvoice();
  }

}

