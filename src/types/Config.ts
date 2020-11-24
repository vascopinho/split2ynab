export interface AppConfig {
  YNAB: {
    baseUrl: string;
    budgetId: string;
    accountId: string;
    payeeId: string;
    apiKey: string;
    uncathegorizedId: string;
  };
  SPLITWISE: {
    baseUrl: string;
    apiKey: string;
    userId: string;
  };
  CRON_FREQUENCY: string;
}
