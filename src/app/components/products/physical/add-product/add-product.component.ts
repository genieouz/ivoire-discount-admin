import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { FetchMyCategoriesGQL } from 'src/generated/graphql';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;
  public counter: number = 1;
  error = null;
  success = null;
  public url = [{
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  }
  ]
  categories = [];
  productImg = "assets/images/pro3/1.jpg";
  cover;
  gallery = [null, null, null, null, null];

  constructor(
    private fb: FormBuilder,
    private readonly productService: ProductsService,
    private readonly fetchMyCategories: FetchMyCategoriesGQL
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      code: [''],
      category: ['', Validators.required],
    })
    this.fetchMyCategories.fetch().subscribe(
      ({ data }) => {
        this.categories = data.fetchMyCategories;
      }
    )
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0) {
      if(i==-1) {
        this.productImg = "assets/images/pro3/1.jpg";
        this.cover = null;
      } else {
        this.url[i].img = "assets/images/user.png";
        this.gallery[i] = null;
      }
      return;
    }
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      if(i === -1) {
        this.productImg = reader.result.toString();
        this.cover = file;
      } else {
        this.url[i].img = reader.result.toString();
        this.gallery[i] = file;
      }
    }
  }

  ngOnInit() {
  }

  addProduct() {
    this.success = null;
    this.error = null;
    if(!this.cover || !this.productForm.valid) {
      if(!this.cover) {
        this.error = "Veuillez ajouter une photo de couverture pour votre produit";
      } else {
        this.error = "Veuillez remplir les champs obligatoires";
        console.log(this.productForm.errors)
        const data = { ...this.productForm.value, quota: this.counter }
        console.log({data})
      }
      return
    } else {
      this.error = null;
    }
    const data = { ...this.productForm.value, quota: this.counter };
    const keys = Object.keys(data);
    const gallery = this.gallery.filter((item) => item !== null);
    const formData = new FormData();
    keys.map(key => {
      formData.append(key, data[key]);
    });
    formData.append('cover', this.cover);
    gallery.map(item => {
      formData.append('gallery', item);
    })
    this.productService.addProduct(formData).subscribe(
      (data) => {
        this.success = "Produit ajouté avec succés!";
      },
      (error) => {
        this.error = "Erreur lors de l'ajout du produit";
      }
    )
  }
}
