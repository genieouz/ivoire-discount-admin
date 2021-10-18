import {Component, Input, OnInit} from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';
import { FetchMyProductsGQL } from 'src/generated/graphql';
import { environment } from 'src/environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productDetail;
  public product_list = []

  constructor(
    private readonly fetchMyProductsGQL: FetchMyProductsGQL,private router : Router
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

  detailProduct(product: any) {
    this.productDetail=product
    console.log(this.productDetail)
    this.router.navigate(['/products/physical/product-detail', {params:this.productDetail}]);
   }
}
