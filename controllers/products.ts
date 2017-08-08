import Product from '../interfaces/Product';

export default class ProductsController {

    private Products;

    /**
     * Creates an instance of ProductsController.
     * @param {any} Products - model with Product's methods
     * @memberof ProductsController
     */
    constructor(Products) {
        this.Products = Products;
    }

    /**
     * Get all Products found
     * 
     * @returns 
     * @memberof ProductsController
     */
    public getAll() {
        return this.Products.findAll({})
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }

    /**
     * Get a specific Product
     * 
     * @param {number} id 
     * @memberof ProductsController
     */
    public getById(id: number) {
        return this.Products.findOne({ where: id })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }

    /**
     * Create a new product
     * 
     * @param {Product} data - informations of new Product
     * @memberof ProductsController
     */
    public create(data: Product) {
        return this.Products.create(data)
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }

    /**
     * Update a product
     * 
     * @param {Product} data - informations to be updated
     * @param {number} id - id of product that will be updated
     * @memberof ProductsController
     */
    public update(data: Product, id: number) {
        return this.Products.update(data, { where: id })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }

    /**
     * Delete a product
     * 
     * @param {number} id - id of product that will be deleted
     * @memberof ProductsController
     */
    public delete(id: number) {
        return this.Products.destroy({ where: id })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
}