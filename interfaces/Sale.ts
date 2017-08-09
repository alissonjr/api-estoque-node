import CashMoviment from "./CashMoviment";
import SalesProduct from "./SalesProduct";
/**
 * Sale example definition
 */
export default interface Sale extends CashMoviment {
    client_id: number;
    products: Array<SalesProduct>;
    invoice: string;
}