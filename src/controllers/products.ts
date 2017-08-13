const HttpStatus = require('http-status');
import Product from '../interfaces/Product';

/**
 * Controller of all Products methods
 * 
 * @export
 * @class ProductsController
 */
export default class ProductsController {

    private Products;
    
    /**
     * Default Response of requesitions
     * 
     * @private
     * @param {object} data - default response
     * @param {number} [statusCode=HttpStatus.OK] - status of requesition
     * @returns 
     * @memberof ProductsController
     */
    private defaultResponse(data: object, statusCode: number = HttpStatus.OK) {
        return { data, statusCode }
    }

    /**
     * Default error response of requisitions
     * 
     * @private
     * @param {string} message - message error
     * @param {number} [statusCode=HttpStatus.BAD_REQUEST]  - status of requisition
     * @returns 
     * @memberof ProductsController
     */
    private errorResponse(message: string, statusCode: number = HttpStatus.BAD_REQUEST){
        return this.defaultResponse({ error: message }, statusCode);
    }

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
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message));
    }

    /**
     * Get a specific Product
     * 
     * @param {number} id 
     * @memberof ProductsController
     */
    public getById(id: number) {
        return this.Products.findOne({ where: { id } })
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message));
    }

    /**
     * Create a new product
     * 
     * @param {Product} data - informations of new Product
     * @memberof ProductsController
     */
    public create(data: Product) {
        return this.Products.create(data)
            .then(result => this.defaultResponse(result, HttpStatus.CREATED))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }

    /**
     * Update a product
     * 
     * @param {Product} data - informations to be updated
     * @param {number} id - id of product that will be updated
     * @memberof ProductsController
     */
    public update(data: Product, id: number) {
        return this.Products.update(data, { where: { id } })
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }

    /**
     * Delete a product
     * 
     * @param {number} id - id of product that will be deleted
     * @memberof ProductsController
     */
    public delete(id: number) {
        return this.Products.destroy({ where: { id } })
            .then(result => this.defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }
}