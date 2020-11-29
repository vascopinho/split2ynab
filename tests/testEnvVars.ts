import { AppConfig } from "../src/types/Config";

export const mockedConfig = {
  splitwiseBaseUrl: "https://splitwise",
  splitwiseApiKey: "SPLITWISE-API-KEY",
  splitwiseUserId: "123456789",
  ynabBaseUrl: "https://ynab",
  ynabBudgetId: "ynabBudgetId",
  ynabAccountId: "ynabAccountId",
  ynabPayeeId: "ynabPayeeId",
  ynabApiKey: "YNAB-API-KEY",
  ynabUncategorizedId: "ynabUncategorizedId",
  cronFrequency: "1",
};

// Splitwise
process.env.SPLITWISE_BASE_URL = mockedConfig.splitwiseBaseUrl;
process.env.SPLITWISE_API_KEY = mockedConfig.splitwiseApiKey;
process.env.SPLITWISE_USER_ID = mockedConfig.splitwiseUserId;

// YNAB
process.env.YNAB_BASE_URL = mockedConfig.ynabBaseUrl;
process.env.YNAB_BUDGET_ID = mockedConfig.ynabBudgetId;
process.env.YNAB_ACCOUNT_ID = mockedConfig.ynabAccountId;
process.env.YNAB_PAYEE_ID = mockedConfig.ynabPayeeId;
process.env.YNAB_API_KEY = mockedConfig.ynabApiKey;
process.env.YNAB_UNCATEGORIZED_ID = mockedConfig.ynabUncategorizedId;

// APP
process.env.CRON_FREQUENCY = mockedConfig.cronFrequency;
