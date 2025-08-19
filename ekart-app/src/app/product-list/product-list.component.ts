import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addToCart : number=  0 ;
  product={
    name : 'iPhone',
    price : 9999,
    pImage : '../../assets/images/v-a-tao-OxvlDO8RwKg-unsplash.jpg',
    instock : 10,
  }

decrementCartValue(){
  if(this.addToCart>0){
      this.addToCart--;

  }
}

incrementCartValue(){
  if(this.addToCart<this.product.instock){
  this.addToCart++;

  }
}

}
