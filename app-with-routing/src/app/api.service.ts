import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    const url = 'http://localhost:8080/products'; // ToDo: move to config file
    return this.http.get<IProduct[]>(url);
  }

}
