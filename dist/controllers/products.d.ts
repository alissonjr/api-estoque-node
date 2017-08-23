import Product from '../interfaces/Product';
export default class ProductsController {
    private Products;
    private defaultResponse(data, statusCode?);
    private errorResponse(message, statusCode?);
    constructor(Products: any);
    getAll(): any;
    getById(id: number): any;
    create(data: Product): any;
    update(data: Product, id: number): any;
    delete(id: number): any;
}
