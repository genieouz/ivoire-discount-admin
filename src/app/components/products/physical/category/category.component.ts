import { Component, OnInit } from '@angular/core';
import { categoryDB } from '../../../../shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FetchMyCategoriesGQL, CreateCategoryGQL } from 'src/generated/graphql';
import { enabled, disabled } from 'src/app/shared/components/html-elements/status-button';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public closeResult: string;
  public categories = []
  newCategory = { name: "", parent: null, status: "ENABLED" }
  constructor(
    private modalService: NgbModal,
    private readonly fetchMyCategoriesGQL: FetchMyCategoriesGQL,
    private createCategoryGQL: CreateCategoryGQL
  ) {
    this.fetchMyCategoriesGQL.fetch().subscribe(
      ({ data }) => {
        this.categories = data.fetchMyCategories.map(category => { return { ...category, category: category?.parent?.name, status: status === 'ENABLED' ? enabled : disabled } })
      console.log(this.categories)
      }
    )

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  public settings = {
    actions: {
      position: 'right',
      add: false
    },
    columns: {
      name: {
        title: 'Nom'
      },
    /*  price: {
        title: 'Prix'
      },*/
      status: {
        title: 'Statut',
        type: 'html',
      },
     /* category: {
        title: 'Parent',
      }*/
    },
  };

  ngOnInit() {
  }

  addCategory() {
    this.createCategoryGQL.mutate({ categoryInput: this.newCategory }).subscribe(
      ({ data }) => {
        const category = data.createCategory;
        this.categories.unshift({ ...category, category: category?.parent?.name, status: status === 'ENABLED' ? enabled : disabled });
      }
    )
  }
}
