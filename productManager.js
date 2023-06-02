// se define la clase ProductManager

class ProductManager {

    constructor() {
        this.products=[] ;
    } 

// método que devuelve el total de productos
getProducts = () => {
    return this.products;
}

// método para almacenar productos

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title, 
        description, 
        price, 
        thumbnail, 
        code,
        stock,
        products: []
    }

    // valida que se envíen todos los datos
    if (product.code!=undefined && product.description!=undefined && product.price!=undefined && product.stock!=undefined && product.thumbnail!=undefined && product.title!=undefined)
        {
            product.id = (this.products.length === 0 ? 1 : this.products[this.products.length - 1].id+1 );
            this.products.push(product); // Agrego al array
        } else { console.log('Falta algún dato');

        }
}

// método que devuelve el indice de un determinado ID que
// recibe como parámetro

getProductById = (idProd) => {
    const pInd = this.products.findIndex( product => product.id === idProd);

    if (pInd === -1) {
        console.log("Not Found");
        return -1;
    }

    return pInd;
}

}

const adminProducts = new ProductManager();

adminProducts.addProduct('pinza','pinza pico de loro',1500,'imagen','PIN3254',54);  // se tiene que dar de alta
adminProducts.addProduct('tenaza','tenaza acera templado',900,'imagen','TEN5214',23); // se tiene que dar de alta

adminProducts.addProduct('tenaza1',900,'imagen','TEN5214',23); // tiene que ser rebotado porque faltan datos

console.log(adminProducts.getProducts()); 

console.log(adminProducts.getProductById(2));
console.log(adminProducts.getProductById(55)); // tiene que devolver -1