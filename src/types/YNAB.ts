export namespace YNAB {
  export enum YNABTransactionType {
    INFLOW = "INFLOW",
    OUTFLOW = "OUTFLOW",
  }

  export interface YNABTransactionRequest {
    transaction: {
      account_id: string;
      date: string;
      amount: number;
      payee_id: string;
      memo: string;
      cleared: string;
      approved: false;
      import_id: string;
      category_id: string;
    };
  }
}
