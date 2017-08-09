/**
 * Product example definition
 */
export default interface Product {
    id?: number;
    name: string;
    type: string;
    description: string;
    bar_code: string;
    default_price: number;
}