class ProductManager{
    static id = 0
    constructor(title, description, price, thumbail, code, stock){
        ProductManager.id +=1
        this.products = []
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbail = thumbail;
        this.code = code;
        this.stock = stock;
    }

    addProduct(){
        if(this.code!==this.code){
            this.products.push([{title,description,price,thumbail,code,stock,id}])
        }
    }

    getProducts(){

        return this.products
    }

    getProductById(){
        const EncontrarPorId = this.products.find(elem => elem.id=== ProductManager.id)
    }
}

const producto1 = new ProductManager;

producto1.addProduct("Fideos","Los mejores carbohidratos para los deportistas", 150, "fideos.jpg", 1, 36);

producto1.getProducts()