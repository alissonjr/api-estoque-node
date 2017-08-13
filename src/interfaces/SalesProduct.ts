import Product from "./Product";
/**
 * Product example definition
 */
interface SalesProduct extends Product {
    disccount: number;
    quantity: number;
}

export default SalesProduct;