import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(){
    return await lastValueFrom(this.http.get<any[]>('http://localhost:5000/api/products', { withCredentials: true }));
  }
}
