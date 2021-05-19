import { product } from './../products/tproduct';

export class CartItem {
  id: number ;
  productID: number;

  img?: string;
  ptoducthref?: string;
  name?: string;
  price?: number;
  customerId?: number;
  quantity: number = 1;

  createdUserID?: number;
  modifiedUserID?: number;
  createdDate?: Date;
  modifiedDate?: Date;


  // totalProduct : number | any;
  constructor( id: number,products: product ,quantity :number,
)
  {
   // this.cartId  = cartId;
    this.id = id;
    //this.cartID = id;
   // this.productID = productID;
    this.productID = products?.id;
    this.img =  products?.img;
    this.ptoducthref =  products?.path;
     this.name =  products?.name;
    this.price = products?.price;
    this.customerId = this.customerId;
   this.quantity = 1;
     }
}
