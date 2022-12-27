const fs = require("fs");
const [fideos] = require("./productos")



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

    async #checkProductCode(code){
        const fileContent = await this.#readFile();
        return fileContent.find((obj)=>obj.code === code)
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

    async addProduct(){
        const fileContent = await this.#readFile()
        if(await this.#checkProductCode(obj.code)) return console.log(`Product with code ${obj.code} is already selected`);
    
        try {
            if(fileContent.length !== 0 ) await fs.promises.writeFile(this.path, JSON.stringify([...fileContent, {...obj, id: fileContent[fileContent.length - 1].id + 1}],null,2),"utf-8")
            else await fs.promises.writeFile(this.path, JSON.stringify([{...obj, id: 1}]), "utf-8")
        } catch (error) {
            console.log(error);   
        }
    }

}

const newProduct = new ProductManager("./db.json")
newProduct.getProducts()
newProduct.addProduct(fideos)
