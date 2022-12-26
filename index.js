const fs = require("fs");



class ProductManager{
    constructor(path){
        this.path = path
    }

    async #readFile(){
        try {
            const content = await fs.promises.readFile(this.path, "utf-8")
            const parseContent = JSON.parse(content)
            return parseContent
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(){
        const fileContent = await this.#readFile();
        try {
            if(fileContent.length === 0) throw new Error("Not products found!")
            else console.log(fileContent);
        } catch(error){
            console.log("Not products found!");
        }

    }

}

const newProduct = new ProductManager("./db.json")
newProduct.getProducts()