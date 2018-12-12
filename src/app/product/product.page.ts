import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  providers: [ 
    ProductServiceService, 
  ]
})
export class ProductPage implements OnInit {

  private productSerial: any;
  private product: any;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
    ) { }

  ngOnInit(){
    this.productSerial = this.route.snapshot.paramMap.get('id');
    console.log(this.productSerial);
    this.productService.getProductBySerial(this.productSerial).subscribe(
      data=>{
        const response = (data as any);
        const objReturn = JSON.parse(response._body);
        this.product = JSON.parse(response._body)[0];
        console.log(objReturn);
      }, error => {
        console.log(error);
      }
    )
  }

}