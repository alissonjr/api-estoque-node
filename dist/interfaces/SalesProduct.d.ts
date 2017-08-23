import Product from "./Product";
interface SalesProduct extends Product {
    disccount: number;
    quantity: number;
}
export default SalesProduct;
