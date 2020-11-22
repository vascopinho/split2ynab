import { AppConfig } from "../types/Config";

export const appConfig: AppConfig = {
  YNAB: {
    baseUrl: process.env.YNAB_BASE_URL,
    budgetId: process.env.YNAB_BUDGET_ID,
    accountId: process.env.YNAB_ACCOUNT_ID,
    payeeId: process.env.YNAB_PAYEE_ID,
    apiKey: process.env.YNAB_API_KEY,
    uncathegorizedId: process.env.YNAB_UNCATHEGORIZED_ID,
  },
  SPLITWISE: {
    baseUrl: process.env.SPLITWISE_BASE_URL,
    apiKey: process.env.SPLITWISE_API_KEY,
    userId: process.env.SPLITWISE_USER_ID,
  },
};