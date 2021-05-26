import { Component, OnInit } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';
import { FetchMyProductsGQL } from 'src/generated/graphql';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public product_list = []

  constructor(
    private readonly fetchMyProductsGQL: FetchMyProductsGQL
  ) {
    this.fetchMyProductsGQL.fetch().subscribe(
      ({ data }) => {
        this.product_list = data.fetchMyProducts;
      }
    )
    // this.product_list = productDB.product;
  }

  ngOnInit() {}

  generateImgUrl(imgId) {
    return `${environment.API_URI}/attachment/${imgId}`
  }
}
