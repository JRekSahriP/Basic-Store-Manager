import * as readLine from 'readline';
import {Store} from './Store';

const scan = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const store = new Store();

function showMenu():void{
    console.log("1 - Create product");
    console.log("2 - View products");
    console.log("3 - Edit products");
    console.log("4 - Delete product");
    console.log("5 - Exit");
}

function readInput(input:string): Promise<string>{
    return new Promise((resolve)=>{
        scan.question(input,resolve);
    });
}

async function main(){
    while(true){
        showMenu();
        const action = await readInput("");

        switch(parseInt(action)){
            case 1:{
                const name = await readInput("Enter the name of product: ");
                const price = parseFloat(await readInput("Enter the price of product: "));
                const stock = parseInt(await readInput("Enter the stock of product: "));
                store.newProduct(name,price,stock);
            }break;

            case 2:{
                store.viewAllProducts();
            }break;

            case 3:{
                const id = parseInt(await readInput("Enter the id of product: "));
                const price = parseFloat(await readInput("Enter the new price of product.(-1 to ignore): "));
                const stock = parseInt(await readInput("Enter the new stock of product.(-1 to ignore): "));
                store.updateProduct(id,price,stock);
            }break;

            case 4:{
                const id = parseInt(await readInput("Enter the id of product: "));
                store.deleteProduct(id);
            }break;

            case 5:{
                console.log("Exiting...");
                scan.close();
                return;
            }break;

            default:{
                console.log("Invalid option. ");
            }break;
        }
    }
}

main();