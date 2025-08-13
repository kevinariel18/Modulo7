import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getInvoice(): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}invoice`);
  }

  checkBackendHealth(): Observable<any> {
    return this.http.get(`${this.apiUrl}health`);
  }
}