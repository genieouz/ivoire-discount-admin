import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  addProduct(product) {
    return this.http.post(`${environment.API_URI}/product`, product);
  }
}
