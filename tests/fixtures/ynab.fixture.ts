import { YNABTransactionRequest } from '../../src/types/YNAB';

export const ynabTransactionFixture = (
  amount: number,
  date: Date,
  import_id: string,
  memo: string
): YNABTransactionRequest => ({
  transaction: {
    amount,
    import_id,
    memo,
    account_id: process.env.YNAB_ACCOUNT_ID,
    approved: false,
    cleared: 'uncleared',
    category_id: process.env.YNAB_UNCATEGORIZED_ID,
    date: date.toString(),
    payee_id: process.env.YNAB_PAYEE_ID,
  },
});
