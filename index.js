class ProductManager{
    constructor(){
        this.products = []
        this.product = Product
    }

    addProduct(product){
        if(this.getProducts().find((p)=> p.code == product.code)) return console.log(`Product with code ${product.code} already exist!`)
        else product.id = this.getProducts().length + 1; this.products.push(product)
    }
    getProducts(){
        return this.products;
    }

    getProductsbyId(id){
        let producto = this.getProducts().find(p=>id == p.id)
        if(producto !== undefined) return producto
        throw "El producto con ID " + id + "no existe entre los disponibles"
    }
}



class Product extends ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const newProduct = new ProductManager();

const producto1 = {
    title: "Fideos",    
    description: "Alimentos especialmente para deportistas de alto rendimiento",
    price:200,
    thumbnail: "fideos.png",
    code: 39,
    stock:30,
}

newProduct.addProduct(producto1)

console.log(newProduct.getProducts());