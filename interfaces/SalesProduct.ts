import Product from "./Product";
/**
 * Product example definition
 */
export default interface SalesProduct extends Product {
    disccount: number;
    quantity: number;
}