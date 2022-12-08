class ProductManager{
    static id = 0;
    static products;
    constructor(title, description,precio,thumbail,code,stock){
        ProductManager.id +=1
        this.products=[]
        this.title = title,
        this.description = description,
        this.precio = precio,
        this.thumbail = thumbail,
        this.code = code,
        this.stock = stock
    }
    addProduct(){
        this.products.push([{title:this.title,description:this.description, precio: this.precio, stock:this.stock}])
    }
    getProducts(){
        console.log("getProducts", this.products);
    }
    getProducById(){

    }
}

let producto1 = new ProductManager("Fideos","carbohidratos para la alimentacion del deportista", 150, 20)

producto1.addProduct()