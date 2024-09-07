import {Product} from './Product';

export class Store {
    private productsList:Product[] = [];

    public newProduct(name:string, price:number, stock:number){
        const product = new Product(name,price,stock);
        this.productsList.push(product);
    }

    public deleteProduct(id:number){
        const index = this.productsList.findIndex(p => p.id === id);
        if(index!==-1){
            this.productsList.splice(index,1);
            console.log("Success.");
        } else {
            console.log("Product not found.");
        }
    }

    public updateProduct(id:number, newPrice:number, newStock:number){
        const product = this.productsList.find(p => p.id === id);
        if(product){
            if(newPrice!==-1){
            product.price = newPrice;
            }
            if(newStock!==-1){
            product.stock = newStock;
            }
            console.log("Success.");
        } else {
            console.log("Product not found.");
        }
    }

    public viewAllProducts():void {
        if(this.productsList.length===0){
            console.log("No products available.");
            return;
        }
        this.productsList.forEach(p=>{
            console.log(p.toString());
        });
    }

}