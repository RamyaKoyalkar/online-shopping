import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:string | any;
  product:Product | any;

  constructor(private route:ActivatedRoute,private router:Router,
    private productService:ProductService) { }

  ngOnInit(): void {

     this.product=new Product();
     this.id=this.route.snapshot.params['id'];
     this.productService.getProduct(this.id)
     .subscribe(data => {
       console.log(data)
       this.product = data;
     }, error => console.log(error));
   }

   
  list()
  {
    this.router.navigate(['products']);
  }

  }

