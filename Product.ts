export class Product {
    public constructor(name:string, price:number, stock:number){
        this.id = Product.nextId;
        this.name = name;
        this.price = price;
        this.stock = stock;
        Product.nextId++;
    }
    private static nextId:number = 1;

    public readonly id:number;
    public readonly name:string;
    public price:number;
    public stock:number;

    public toString():string {
        return `id:${this.id}, name:${this.name}, price:${this.price}, stock:${this.stock}`;
    }
}