export class product{
   id: number  ;
   img?: string;
   path?: string;
   name ?:string;
   price ?: number;
   quantity ?: number;
  description?: string;
 // productID ?: number;
  category ?: string;
  constructor(
    id: number,
    img?: string,
    path?: string,
    name?:string,
    price? :number,
    quantity ?:number ,
    description?: string ,
    //productID ?: number,
    category ?: string) {
    this.id = id;
    this.img = img;
    this.path = path;
    this.name = name;
    this.price = price;
    this.quantity = 1;
    this.description = description;
    //this. productID =  productID;
    this.category = category;



     }


}
