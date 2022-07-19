import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/models/category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  currentCategory: Category;

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService
      .getCategories()
      .subscribe((response) => (this.categories = response.data));
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCategoryClass(category: Category) {
    if (this.currentCategory == category) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
}
