class ProductManager{

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
            this.products.push({title,description,price,thumbail,code,stock,id})
        }
    }

    getProducts(){

        return this.products
    }

    getProductById(){

    }


}

