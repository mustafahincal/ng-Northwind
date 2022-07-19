import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category } from "src/app/models/category";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  products: Product[] = [];
  dataLoaded = false;

  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: "",
  //   success: false,
  // };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }
}
