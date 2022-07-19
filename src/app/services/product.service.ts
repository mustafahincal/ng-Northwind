import { HttpClient } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListResponseModel } from "../models/listResponseModel";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = "https://localhost:44340/api/";

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + "products/getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
