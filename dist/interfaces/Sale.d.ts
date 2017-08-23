import CashMoviment from "./CashMoviment";
import SalesProduct from "./SalesProduct";
interface Sale extends CashMoviment {
    client_id: number;
    products: Array<SalesProduct>;
    invoice: string;
}
export default Sale;
