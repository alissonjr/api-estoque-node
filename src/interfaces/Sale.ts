import CashMoviment from "./CashMoviment";
import SalesProduct from "./SalesProduct";
/**
 * Sale example definition
 */
interface Sale extends CashMoviment {
    client_id: number;
    products: Array<SalesProduct>;
    invoice: string;
}

export default Sale;