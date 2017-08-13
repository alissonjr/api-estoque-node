/**
 * Cash Moviment example definition
 */
interface CashMoviment {
    id?: number;
    type: boolean; // 0 para entrada e 1 para saída
    description: string;
    value: string;
    date: Date;
}

export default CashMoviment;